import React from 'react';
import { connect } from 'react-redux';

const FilterLink = (props) => {
  if (props.active) {
    return (
      <span>{props.children}</span>
    );
  }

  return (
    <button
      onClick={
        () => {
          props.toggleVisibilityFilter(props.filter);
        }
      }>
      {props.children}
    </button>
  );
};

FilterLink.propTypes = {
  filter: React.PropTypes.string,
  children: React.PropTypes.string,
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleVisibilityFilter: () => dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: ownProps.filter,
    }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
