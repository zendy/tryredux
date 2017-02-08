import React from 'react';
import { connect } from 'react-redux';

import AddTodo from '../components/AddTodo';
import Filter from '../components/Filter';
import Todo from '../components/Todo';

import * as ACTIONS from './TodoApp.actions';

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
      dispatch(ACTIONS.toggleTodo(id));
    },
    addTodo: (text) => {
      dispatch(ACTIONS.addTodo(text));
    },
    toggleVisibilityFilter: (filter) => {
      dispatch(ACTIONS.toggleVisibilityFilter(filter));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
