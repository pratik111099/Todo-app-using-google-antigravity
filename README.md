# AI-Powered Todo App

A full-stack Todo application built with the MERN stack (MongoDB, Express, React, Node.js) and TypeScript, featuring state management with Redux Toolkit.

## Project Structure

```text
├── backend/            # Express & Mongoose Backend (TypeScript)
└── frontend/           # React & Vite Frontend (TypeScript)
```

## Features

- **Full CRUD Operations:** Create, Read, Update, and Delete todos.
- **State Management:** Uses Redux Toolkit for predictable state transitions.
- **TypeScript:** Type safety across both frontend and backend.
- **Modern UI:** Built with React 19 and Vite.

## Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (Local or Atlas)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd "Todo APP AI"
   ```

2. Install dependencies for both parts:
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the Backend:**
   Go to the `backend` folder, create a `.env` file (see `backend/README.md` for details), and run:
   ```bash
   npm run dev
   ```

2. **Start the Frontend:**
   Go to the `frontend` folder and run:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:5000`.
