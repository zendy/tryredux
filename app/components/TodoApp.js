import React from 'react';

import AddTodo from './AddTodo';
import Filter from './Filter';
import Todo from './Todo';

const TodoApp = () => (
  <div>
    <AddTodo />
    <Filter />
    <Todo />
  </div>
);

export default TodoApp;
