import React from 'react';

import FilterLink from './FilterLink';

const Filter = ({ visibilityFilter, toggleVisibilityFilter }) => (
  <p>
    Show:
    <FilterLink
      filter="SHOW_ALL"
      visibilityFilter={visibilityFilter}
      toggleVisibilityFilter={toggleVisibilityFilter}
    >
      All
    </FilterLink>
    <FilterLink
      filter="SHOW_ACTIVE"
      visibilityFilter={visibilityFilter}
      toggleVisibilityFilter={toggleVisibilityFilter}
    >
      Active
    </FilterLink>
    <FilterLink
      filter="SHOW_COMPLETED"
      visibilityFilter={visibilityFilter}
      toggleVisibilityFilter={toggleVisibilityFilter}
    >
      Completed
    </FilterLink>
  </p>
);

export default Filter;
