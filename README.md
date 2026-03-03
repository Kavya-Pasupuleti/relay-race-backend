# Relay Race Backend

Node.js + Express + MongoDB backend for the Debug Relay Race.

## Prerequisites
- **Node.js**: Installed on your system.
- **MongoDB**: Installed and running locally at `mongodb://127.0.0.1:27017`.

## Folder Structure
```
backend/
├── models/
│   └── Participant.js   # Mongoose Schema
├── package.json         # Dependencies
├── server.js            # Main application logic
└── README.md            # Documentation
```

## How to Run

1. **Open a terminal** and navigate to the `backend` folder:
   ```powershell
   cd backend
   ```

2. **Install dependencies**:
   ```powershell
   npm install
   ```

3. **Start the server**:
   ```powershell
   npm start
   ```
   The backend will be available at [http://localhost:5000](http://localhost:5000).

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Save registration details (name, email, phone, college) |
| PUT | `/complete/:email` | Save `totalTime` when Level 4 is completed |
| GET | `/admin/participants` | Get all participants sorted by fastest time |
| PUT | `/admin/mark-winner/:id` | Mark a participant as the winner |

## Security Note
This backend uses CORS to allow requests only from `http://localhost:5173`. Ensure your Vite frontend is running on that port.
