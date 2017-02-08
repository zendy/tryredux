export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: 1,
  text,
});

export const toggleVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});
