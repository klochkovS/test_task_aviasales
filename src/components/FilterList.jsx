import React from 'react';
import StopsFilter from './StopsFilter';
import CurrencyFilter from './CurrencyFilter';

const FilterList = ({ handleStops, handleCurrencyControl, currencyCode }) => (
  <div className="filters">
    <CurrencyFilter
      handleCurrencyControl={handleCurrencyControl}
      currencyCode={currencyCode}
    />
    <StopsFilter handleStops={handleStops} />
  </div>
);

export default FilterList;
