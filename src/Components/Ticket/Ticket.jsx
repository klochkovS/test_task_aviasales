import React from 'react';
import PropTypes from 'prop-types';

const Ticket = ({ tripData, currencyIndex }) => (
  <div className="tickets__item ticket">
    <div className="ticket__left-side">
      <div className="ticket__buy-button buy-button">
        <a className="buy-button__link" href="#">
          <div className="buy-button__button">
            <span className="buy-button__text">
              {Math.ceil(tripData.price * currencyIndex)}
            </span>
          </div>
        </a>
      </div>
    </div>
    <div className="ticket__fly-data fly-data">
      <div className="fly-data__time fly-time">
        <div className="fly-time__start"></div>
        <div className="fly-time__duration">
          {tripData.stops}
        </div>
        <div className="fly-time__end"></div>
      </div>
      <div className="fly-data__route route">
        <div className="route__departure"></div>
        <div className="route__arrival"></div>
      </div>
    </div>
  </div>
);

Ticket.propTypes = {
  tripData: PropTypes.shape({
    'origin': PropTypes.string.isRequired,
    'origin_name': PropTypes.string.isRequired,
    'destination': PropTypes.string.isRequired,
    'destination_name': PropTypes.string.isRequired,
    'departure_date': PropTypes.string.isRequired,
    'departure_time': PropTypes.string.isRequired,
    'arrival_date': PropTypes.string.isRequired,
    'arrival_time': PropTypes.string.isRequired,
    'carrier': PropTypes.string.isRequired,
    'stops': PropTypes.number.isRequired,
    'price': PropTypes.number.isRequired,
  }).isRequired,
  currencyIndex: PropTypes.number.isRequired,
};

export default Ticket;
