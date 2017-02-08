import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodoApp from './containers/TodoApp';
import TodoAppReducers from './containers/TodoApp.reducers';

ReactDOM.render(
  <Provider store={createStore(TodoAppReducers)}>
    <TodoApp />
  </Provider>, document.getElementById('root'));
