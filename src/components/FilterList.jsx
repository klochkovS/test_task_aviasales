import React from 'react';
import StopsFilter from './StopsFilter';
import CurrencyFilter from './CurrencyFilter';

const FilterList = ({ handleStops, handleCurrencyControl }) => (
  <div className="filters">
    <CurrencyFilter handleCurrencyControl={handleCurrencyControl} />
    <StopsFilter handleStops={handleStops} />
  </div>
);

export default FilterList;
