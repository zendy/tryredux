import React from 'react';
import { connect } from 'react-redux';

const Todo = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
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

const mapStateToProps = (state) => ({
  // todos: state.todos,
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => {
      dispatch({
        type: 'TOGGLE_TODO',
        id,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
