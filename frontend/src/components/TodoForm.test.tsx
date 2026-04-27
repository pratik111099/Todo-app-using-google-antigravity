import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { describe, it, expect, vi } from 'vitest';
import TodoForm from './TodoForm';
import todosReducer from '../features/todos/todosSlice';

const renderWithRedux = (component: React.ReactElement) => {
  const store = configureStore({
    reducer: {
      todos: todosReducer,
    },
  });
  return render(<Provider store={store}>{component}</Provider>);
};

describe('TodoForm', () => {
  it('renders input and button', () => {
    renderWithRedux(<TodoForm />);
    expect(screen.getByPlaceholderText('Add a new task...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
  });

  it('updates input value on change', () => {
    renderWithRedux(<TodoForm />);
    const input = screen.getByPlaceholderText('Add a new task...') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'New Task' } });
    expect(input.value).toBe('New Task');
  });

  it('clears input after submission', () => {
    renderWithRedux(<TodoForm />);
    const input = screen.getByPlaceholderText('Add a new task...') as HTMLInputElement;
    const button = screen.getByRole('button', { name: /add/i });

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);

    expect(input.value).toBe('');
  });
});
