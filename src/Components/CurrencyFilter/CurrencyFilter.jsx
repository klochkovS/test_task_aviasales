import React from 'react';
import PropTypes from 'prop-types';
import './currencyList.css';

const curencyList = [
  'RUB',
  'USD',
  'EUR',
];

const CurrencyFilter = ({ handleCurrencyControl, currencyCode }) => (
  <div className="filters__item filter">
    <div className="filter__header">валюта</div>
    <div className="filter__content">
      <ul className="currency-list">
        {
          curencyList.map((val) => {
            if (val === currencyCode) {
              return (
                <li
                  className="currency-list__item currency-list__item_selected"
                  onClick={handleCurrencyControl}
                >{val}
                </li>
              );
            }
            return (
              <li
                className="currency-list__item"
                onClick={handleCurrencyControl}
              >{val}
              </li>
            );
          })
        }
      </ul>
    </div>
  </div>
);

CurrencyFilter.propTypes = {
  handleCurrencyControl: PropTypes.func.isRequired,
  currencyCode: PropTypes.string.isRequired,
};

export default CurrencyFilter;
