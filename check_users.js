import mongoose from 'mongoose';
import Participant from './models/Participant.js';

mongoose.connect('mongodb://127.0.0.1:27017/relayRaceDB')
    .then(async () => {
        const users = await Participant.find({});
        console.log("Users in DB:", users.map(u => ({ id: u._id, name: u.name, email: u.email })));
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
