import { v4 } from 'node-uuid';
import fetchData from '../api/reddit';

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: v4(),
  text,
});

const requestTodos = () => ({
  type: 'REQUEST_TODOS',
});

const receiveTodos = (todos) => ({
  type: 'RECEIVE_TODOS',
  todos,
});

export const fetchTodos = () => (dispatch, getState) => {
  if (getState().isFetching) {
    return Promise.resolve();
  }

  dispatch(requestTodos());
  return fetchData().then(todos => dispatch(receiveTodos(todos)));
};

export const toggleVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});
