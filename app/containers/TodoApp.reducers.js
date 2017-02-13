import { combineReducers } from 'redux';

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed,
      });
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo({}, action),
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const todosByID = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_TODOS': {
      return [
        ...state,
        ...action.todos,
      ];
    }
    case 'ADD_TODO':
      return [
        ...state,
        todo({}, action),
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case 'REQUEST_TODOS':
      return true;
    case 'RECEIVE_TODOS':
      return false;
    default:
      return state;
  }
};

const TodoAppReducers = combineReducers({
  todosByID,
  visibilityFilter,
  isFetching,
});

export default TodoAppReducers;
