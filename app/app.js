import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import TodoApp from './containers/TodoApp';
import TodoAppReducers from './containers/TodoApp.reducers';

// import { loadState, saveState } from './helpers/localStorage';


const persistedState = {
  todos: [
    {
      id: '0',
      text: 'Welcome',
      completed: false,
    }],
};
// const persistedState = loadState();

const middlewares = [thunk, createLogger()];

const store = createStore(TodoAppReducers, persistedState, applyMiddleware(...middlewares));
// store.subscribe(() => (
//   saveState({
//     todos: store.getState().todos,
//   })
// ));

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>, document.getElementById('root'));
