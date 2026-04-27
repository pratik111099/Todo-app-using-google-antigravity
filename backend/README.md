# Todo App Backend

This is the backend for the AI-Powered Todo App, built with Node.js, Express, and MongoDB using TypeScript.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose)
- **Language:** TypeScript
- **Tooling:** Nodemon, ts-node

## Getting Started

### Environment Variables

Create a `.env` file in the root of the `backend` directory and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### Installation

```bash
npm install
```

### Available Scripts

- `npm run dev`: Runs the server in development mode with hot-reloading using `nodemon`.
- `npm run build`: Compiles the TypeScript code to JavaScript in the `dist` folder.
- `npm start`: Runs the compiled JavaScript from the `dist` folder.

## API Documentation

The server runs on `http://localhost:5000/api/todos` by default.

### Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/todos` | Fetch all todos |
| `POST` | `/api/todos` | Create a new todo |
| `PUT` | `/api/todos/:id` | Update an existing todo (e.g., toggle completion) |
| `DELETE` | `/api/todos/:id` | Delete a todo |

### Data Model (Todo)

```typescript
{
  title: string;      // Required
  completed: boolean; // Default: false
  createdAt: Date;    // Default: Date.now
}
```
