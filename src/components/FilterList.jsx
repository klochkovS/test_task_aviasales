import React from 'react';
import PropTypes from 'prop-types';
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

FilterList.propTypes = {
  handleStops: PropTypes.func.isRequired,
  handleCurrencyControl: PropTypes.func.isRequired,
  currencyCode: PropTypes.string.isRequired,
};

export default FilterList;
