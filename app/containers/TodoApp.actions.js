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

const receiveTodos = (todos) => ({
  type: 'RECEIVE_TODOS',
  todos,
});

export const fetchTodos = () => fetchData().then(todos => receiveTodos(todos));

export const toggleVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});
