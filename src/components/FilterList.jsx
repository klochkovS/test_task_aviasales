import React from 'react';
import StopsFilter from './StopsFilter';

const FilterList = ({ handleStops }) => (
  <div className="filters">
    <StopsFilter handleStops={handleStops} />
  </div>
);

export default FilterList;
