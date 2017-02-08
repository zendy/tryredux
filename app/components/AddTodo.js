import React from 'react';

const AddTodo = ({addTodo}) => (
  <div>
    <input type="text" ref={(node) => { this.input = node; }} />
    <button
      onClick={() => {
        addTodo(this.input.value);
        this.input.value = '';
      }}
    >
      Add
    </button>
  </div>
);

export default AddTodo;
