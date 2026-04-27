import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { describe, it, expect, vi } from 'vitest';
import TodoItem from './TodoItem';
import todosReducer from '../features/todos/todosSlice';

const mockTodo = {
  _id: '1',
  title: 'Test Todo',
  completed: false,
  createdAt: '',
};

const renderWithRedux = (component: React.ReactElement) => {
  const store = configureStore({
    reducer: {
      todos: todosReducer,
    },
  });
  return render(<Provider store={store}>{component}</Provider>);
};

describe('TodoItem', () => {
  it('renders todo title', () => {
    renderWithRedux(<TodoItem todo={mockTodo} />);
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });

  it('renders checkbox with correct state', () => {
    renderWithRedux(<TodoItem todo={mockTodo} />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  });

  it('renders completed state', () => {
    const completedTodo = { ...mockTodo, completed: true };
    renderWithRedux(<TodoItem todo={completedTodo} />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });
});
