import React from 'react';

const curencyList = [
  'RUB',
  'USD',
  'EUR',
];

const CurrencyFilter = ({ handleCurrencyControl, currencyCode }) => (
  <div className="filters__item">
    <div className="filters__header">ВАЛЮТА</div>
    <div className="filters__content">
      <div className="checkboxes-list">
        {curencyList.map((v) => {
          if (v === currencyCode) {
            return (
              <div className="checkboxes-list__item" onClick={handleCurrencyControl}>
                <span className="checkbox">
                  <input className="checkbox__field" type="checkbox" />
                  <span className="checkbox__view" />
                </span>
                <label className="checkboxes-list__label">{v}</label>
              </div>
            );
          }
          return (
            <div className="checkboxes-list__item" onClick={handleCurrencyControl}>
              <span className="checkbox">
                <input className="checkbox__field" type="checkbox" />
                <span className="checkbox__view" />
              </span>
              <label className="checkboxes-list__label">{v}</label>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default CurrencyFilter;
