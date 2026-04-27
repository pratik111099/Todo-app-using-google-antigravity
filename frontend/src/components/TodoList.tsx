import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../app/store';
import { fetchTodos } from '../features/todos/todosSlice';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { todos, status, error } = useSelector((state: RootState) => state.todos);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div className="loading">Loading tasks...</div>;
  if (status === 'failed') return <div className="error">Error: {error}</div>;

  return (
    <ul className="todo-list">
      {todos.length === 0 ? (
        <div className="empty">No tasks yet. Add one above!</div>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))
      )}
    </ul>
  );
};

export default TodoList;
