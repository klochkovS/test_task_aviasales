import React from 'react';

const curencyList = [
  'RUB',
  'USD',
  'EUR',
];

const CurrencyFilter = ({ handleCurrencyControl, currencyCode }) => (
  <div className="currency">
    <ul>
      {curencyList.map((v) => {
        if (v === currencyCode) {
          return (
            <li className="selected" onClick={handleCurrencyControl}>
              <span>{v}</span>
            </li>
          );
        }
        return (
          <li onClick={handleCurrencyControl}>
            <span>{v}</span>
          </li>
        );
      })}
    </ul>
  </div>
);

export default CurrencyFilter;
