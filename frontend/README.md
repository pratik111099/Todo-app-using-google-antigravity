# Todo App Frontend

This is the frontend for the AI-Powered Todo App, built with React, TypeScript, and Vite.

## Tech Stack

- **Framework:** React 19
- **State Management:** Redux Toolkit
- **HTTP Client:** Axios
- **Build Tool:** Vite
- **Language:** TypeScript

## Getting Started

### Installation

```bash
npm install
```

### Available Scripts

- `npm run dev`: Runs the app in development mode at `http://localhost:5173`.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to check for code quality.
- `npm run preview`: Previews the production build locally.

## Features & Structure

### State Management (Redux)

The application uses Redux Toolkit to manage the state of todos. The slice is located in `src/features/todos/todosSlice.ts`.

**Asynchronous Actions (Thunks):**
- `fetchTodos`: Fetches todos from the backend API.
- `addTodo`: Sends a POST request to create a new todo.
- `toggleTodo`: Sends a PUT request to update the completion status.
- `deleteTodo`: Sends a DELETE request to remove a todo.

### Components

- `TodoForm.tsx`: Input field and button to add new todos.
- `TodoList.tsx`: Maps through the todos and renders `TodoItem` for each.
- `TodoItem.tsx`: Individual todo display with toggle and delete functionality.

## API Integration

The frontend communicates with the backend at `http://localhost:5000/api/todos`. Ensure the backend is running for data persistence.
