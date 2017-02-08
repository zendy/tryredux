import React from 'react';
import { connect } from 'react-redux';

import AddTodo from '../components/AddTodo';
import Filter from '../components/Filter';
import Todo from '../components/Todo';

const TodoApp = ({ todos, visibilityFilter, toggleTodo, addTodo, toggleVisibilityFilter }) => (
  <div>
    <AddTodo
      addTodo={addTodo}
    />
    <Filter
      visibilityFilter={visibilityFilter}
      toggleVisibilityFilter={toggleVisibilityFilter}
    />
    <Todo
      todos={todos}
      toggleTodo={toggleTodo}
      visibilityFilter={visibilityFilter}
    />
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
  visibilityFilter: state.visibilityFilter,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => {
      dispatch({
        type: 'TOGGLE_TODO',
        id,
      });
    },
    addTodo: (text) => {
      dispatch({
        type: 'ADD_TODO',
        id: 1,
        text,
      });
    },
    toggleVisibilityFilter: (filter) => dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter,
    }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
