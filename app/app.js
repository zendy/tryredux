import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import TodoApp from './components/TodoApp';

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
  // console.log('test A');
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
  // console.log('test B');
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const todoApp = combineReducers({
  // todos: todos,
  // visibilityFilter: visibilityFilter,
  todos,
  visibilityFilter,
});
// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//   };
// };

let store = createStore(todoApp);

// console.group('Initial state:');
// console.log(store.getState());
// console.groupEnd();
//
// console.group('Dispatching ADD_TODO:');
// store.dispatch({
//   type: 'ADD_TODO',
//   id: 0,
//   text: 'Learn Redux',
// });
// console.log(store.getState());
// console.groupEnd();
//
// console.group('Dispatching ADD_TODO:');
// store.dispatch({
//   type: 'ADD_TODO',
//   id: 1,
//   text: 'Go Do Stuff',
// });
// console.log(store.getState());
// console.groupEnd();
//
// console.group('Dispatching TOGGLE_TODO:');
// store.dispatch({
//   type: 'TOGGLE_TODO',
//   id: 1,
// });
// console.log(store.getState());
// console.groupEnd();
//
// console.group('Dispatching SET_VISIBILITY_FILTER:');
// store.dispatch({
//   type: 'SET_VISIBILITY_FILTER',
//   filter: 'SHOW_COMPLETED',
// });
// console.log(store.getState());
// console.groupEnd();

// let nextId = 0;
// const addTodo = (value) => {
//   store.dispatch({
//     type: 'ADD_TODO',
//     id: nextId++,
//     text: value,
//   });
// };
// const toggleTodo = (id) => {
//   store.dispatch({
//     type: 'TOGGLE_TODO',
//     id,
//   });
// };
// const toggleVisibilityFilter = (value) => {
//   store.dispatch({
//     type: 'SET_VISIBILITY_FILTER',
//     filter: value,
//   });
// };

// const render = () => {
//   ReactDOM.render(
//     <Provider store={createStore(todoApp)}>
//       <TodoApp
//         addTodo={addTodo}
//         toggleTodo={toggleTodo}
//         toggleVisibilityFilter={toggleVisibilityFilter}
//       />
//     </Provider>, document.getElementById('root'));
// };

// store.subscribe(render);
// render();

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>, document.getElementById('root'));
