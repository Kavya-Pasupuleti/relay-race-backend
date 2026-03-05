import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Participant from './models/Participant.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-admin-token'],
    credentials: true
}));
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/relayRaceDB';
mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => {
        console.error('❌ MongoDB Connection Error:', err.message);
        process.exit(1);
    });

// --- API ROUTES ---

// 1. POST /register → Save registration details
app.post('/register', async (req, res) => {
    try {
        const { name, email, phone, college } = req.body;
        const existing = await Participant.findOne({ email });
        if (existing) return res.status(400).json({ message: 'Email already registered' });

        const newParticipant = new Participant({ name, email, phone, college });
        await newParticipant.save();
        res.status(201).json({ message: 'Successfully registered for the race!', participant: newParticipant });
    } catch (error) {
        res.status(500).json({ message: 'Error registering participant', error: error.message });
    }
});

// 2. PUT /complete/:email → Save totalTime when Level 4 is completed
app.put('/complete/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const { totalTime } = req.body;
        const participant = await Participant.findOneAndUpdate(
            { email },
            { totalTime, completedAt: new Date() },
            { new: true }
        );
        if (!participant) return res.status(404).json({ message: 'Participant not found' });
        res.json({ message: 'Level 4 completed! Time recorded.', participant });
    } catch (error) {
        res.status(500).json({ message: 'Error updating completion status', error: error.message });
    }
});

// 3. GET /admin/participants → Return all participants sorted by totalTime ascending
app.get('/admin/participants', async (req, res) => {
    try {
        const participants = await Participant.find({}).sort({ totalTime: 1 });
        res.json(participants);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching participants', error: error.message });
    }
});

// 4. PUT /admin/mark-winner/:id → Mark selected participant as winner
app.put('/admin/mark-winner/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const participant = await Participant.findByIdAndUpdate(id, { winner: true }, { new: true });
        if (!participant) return res.status(404).json({ message: 'Participant not found' });
        res.json({ message: 'Participant marked as winner!', participant });
    } catch (error) {
        res.status(500).json({ message: 'Error marking winner', error: error.message });
    }
});

// Admin Auth Middleware
const adminAuth = (req, res, next) => {
    const token = req.headers['x-admin-token'];
    if (token === 'admin123') { // Simple token check
        next();
    } else {
        res.status(403).json({ message: 'Forbidden: Admin access required' });
    }
};

// 5. GET /admin/users → Return all registered users
app.get('/admin/users', adminAuth, async (req, res) => {
    try {
        const users = await Participant.find({}, 'name email registeredAt').sort({ registeredAt: -1 });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
});

// --- Serve Frontend ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Backend + Frontend running at http://localhost:${PORT}`);
});