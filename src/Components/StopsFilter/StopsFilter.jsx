import React from 'react';
import PropTypes from 'prop-types';

const stops = [
  'Без пересадок',
  '1 пересадка',
  '2 пересадки',
  '3 пересадки',
];

const StopsFilter = ({ handleStops }) => (
  <div className="filters__item filter">
    <div className="filter__header">количество пересадок</div>
    <div className="filter__content">
      <div className="checkboxes-list">
        {
          stops.map((label, stopsCount) => (
            <div className="checkboxes-list__item">
              <div className="checkboxes-list__label" onClick={handleStops} id={`stops_${stopsCount}`}>
                <span className="checkbox">
                  <input className="checkbox__field" type="checkbox" />
                  <span className="checkbox__view" />
                </span>
                {label}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </div>
);

StopsFilter.propTypes = {
  handleStops: PropTypes.func.isRequired,
};

export default StopsFilter;
