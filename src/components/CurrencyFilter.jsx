import React from 'react';

const CurrencyFilter = ({ handleCurrencyControl }) => (
  <div className="currency">
    <ul>
      <li onClick={handleCurrencyControl}>
        <span>rub</span>
      </li>
      <li onClick={handleCurrencyControl}>
        <span>usd</span>
      </li>
      <li onClick={handleCurrencyControl}>
        <span>eur</span>
      </li>
    </ul>
  </div>
);

export default CurrencyFilter;
