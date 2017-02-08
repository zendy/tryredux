import React from 'react';

const FilterLink = ({ filter, visibilityFilter, toggleVisibilityFilter, children}) => {
  if (filter === visibilityFilter) {
    return (
      <span>{children}</span>
    );
  }

  return (
    <button
      onClick={
        () => {
          toggleVisibilityFilter(filter);
        }}
    >
      {children}
    </button>
  );
};

FilterLink.propTypes = {
  filter: React.PropTypes.string,
  children: React.PropTypes.string,
}

export default FilterLink;
