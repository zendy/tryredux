import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodoApp from './containers/TodoApp';
import TodoAppReducers from './containers/TodoApp.reducers';

import { loadState, saveState } from './helpers/localStorage';


const persistedState = {
  todos: [
    {
      id: '0',
      text: 'Welcome',
      completed: false,
    }],
};
// const persistedState = loadState();

const store = createStore(TodoAppReducers, persistedState);
// store.subscribe(() => (
//   saveState({
//     todos: store.getState().todos,
//   })
// ));

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>, document.getElementById('root'));
