import React from 'react';
import { connect } from 'react-redux';

import AddTodo from '../components/AddTodo';
import Filter from '../components/Filter';
import Todo from '../components/Todo';

import * as ACTIONS from './TodoApp.actions';

class TodoApp extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        <AddTodo
          addTodo={this.props.addTodo}
        />
        <Filter
          visibilityFilter={this.props.visibilityFilter}
          toggleVisibilityFilter={this.props.toggleVisibilityFilter}
        />
        <Todo
          todos={this.props.todos}
          toggleTodo={this.props.toggleTodo}
          visibilityFilter={this.props.visibilityFilter}
        />
      </div>
    );
  }
}
// const TodoApp = ({ todos, visibilityFilter, toggleTodo, addTodo, toggleVisibilityFilter }) => (
//
// );

const mapStateToProps = (state) => ({
  todos: state.todosByID,
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
    fetchTodos: () => {
      dispatch(ACTIONS.fetchTodos());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
