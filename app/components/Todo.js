import React from 'react';

const Todo = ({ todos, visibilityFilter, toggleTodo }) => {
  const visibleTodos = getVisibleTodos(todos, visibilityFilter);
  return (
    <ul>
      {visibleTodos.map(todo =>
        <li
          key={todo.id}
          onClick={() => {
            toggleTodo(todo.id);
          }}
          style={todo.completed ? { textDecoration: 'line-through' } : {}}
        >
          {todo.text}
        </li>
      )}
    </ul>
  );
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed
      );
    default:
      return todos;
  }
};

export default Todo;
