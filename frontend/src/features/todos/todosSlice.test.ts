import { describe, it, expect } from 'vitest';
import reducer, { Todo } from './todosSlice';

describe('todosSlice reducer', () => {
  const initialState = {
    todos: [],
    status: 'idle' as const,
    error: null,
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle fetchTodos.pending', () => {
    const actual = reducer(initialState, { type: 'todos/fetchTodos/pending' });
    expect(actual.status).toEqual('loading');
  });

  it('should handle fetchTodos.fulfilled', () => {
    const todos: Todo[] = [{ _id: '1', title: 'Test Todo', completed: false, createdAt: '' }];
    const actual = reducer(initialState, { type: 'todos/fetchTodos/fulfilled', payload: todos });
    expect(actual.status).toEqual('succeeded');
    expect(actual.todos).toEqual(todos);
  });

  it('should handle addTodo.fulfilled', () => {
    const newTodo: Todo = { _id: '2', title: 'New Todo', completed: false, createdAt: '' };
    const stateWithOneTodo = {
      todos: [{ _id: '1', title: 'Test Todo', completed: false, createdAt: '' }],
      status: 'succeeded' as const,
      error: null,
    };
    const actual = reducer(stateWithOneTodo, { type: 'todos/addTodo/fulfilled', payload: newTodo });
    expect(actual.todos[0]).toEqual(newTodo);
    expect(actual.todos.length).toEqual(2);
  });

  it('should handle deleteTodo.fulfilled', () => {
    const stateWithTodos = {
      todos: [
        { _id: '1', title: 'Todo 1', completed: false, createdAt: '' },
        { _id: '2', title: 'Todo 2', completed: false, createdAt: '' },
      ],
      status: 'succeeded' as const,
      error: null,
    };
    const actual = reducer(stateWithTodos, { type: 'todos/deleteTodo/fulfilled', payload: '1' });
    expect(actual.todos.length).toEqual(1);
    expect(actual.todos[0]._id).toEqual('2');
  });
});
