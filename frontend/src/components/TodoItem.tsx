import React from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../app/store';
import { toggleTodo, deleteTodo } from '../features/todos/todosSlice';
import type { Todo } from '../features/todos/todosSlice';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo))}
      />
      <span onClick={() => dispatch(toggleTodo(todo))}>{todo.title}</span>
      <button
        className="delete-btn"
        onClick={() => dispatch(deleteTodo(todo._id))}
      >
        &times;
      </button>
    </li>
  );
};

export default TodoItem;
