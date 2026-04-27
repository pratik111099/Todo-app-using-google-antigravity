import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { describe, it, expect } from 'vitest';
import TodoList from './TodoList';
import todosReducer from '../features/todos/todosSlice';

const renderWithRedux = (initialState = {}) => {
  const store = configureStore({
    reducer: {
      todos: todosReducer,
    },
    preloadedState: {
      todos: {
        todos: [],
        status: 'idle',
        error: null,
        ...initialState,
      },
    },
  });
  return render(<Provider store={store}><TodoList /></Provider>);
};

describe('TodoList', () => {
  it('renders loading state', () => {
    renderWithRedux({ status: 'loading' });
    expect(screen.getByText(/loading tasks.../i)).toBeInTheDocument();
  });

  it('renders error state', () => {
    renderWithRedux({ status: 'failed', error: 'Fetch failed' });
    expect(screen.getByText(/error: fetch failed/i)).toBeInTheDocument();
  });

  it('renders empty state', () => {
    renderWithRedux({ todos: [], status: 'succeeded' });
    expect(screen.getByText(/no tasks yet/i)).toBeInTheDocument();
  });

  it('renders list of todos', () => {
    const todos = [
      { _id: '1', title: 'Todo 1', completed: false, createdAt: '' },
      { _id: '2', title: 'Todo 2', completed: true, createdAt: '' },
    ];
    renderWithRedux({ todos, status: 'succeeded' });
    expect(screen.getByText('Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Todo 2')).toBeInTheDocument();
  });
});
