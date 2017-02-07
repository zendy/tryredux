import React from 'react';
import { connect } from 'react-redux';

let id = 0;

const AddTodo = ({ dispatch }) => (
  <div>
    <input type="text" ref={(node) => { this.input = node; }} />
    <button
      onClick={() => {
        dispatch({
          type: 'ADD_TODO',
          id: id++,
          text: this.input.value,
        });
        this.input.value = '';
      }}
    >
      Add
    </button>
  </div>
);

export default connect()(AddTodo);
