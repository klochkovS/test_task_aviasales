import React from 'react';
import PropTypes from 'prop-types';
import initialData from '../../data/tickets.json';

const TicketList = ({ stopsParam, currencyIndex }) => (
  <div>
    {initialData.tickets
      .sort((a, b) => a.price - b.price) // Меняет исходный массив!
      .filter(ticket => stopsParam.includes(ticket.stops))
      .map(val => (
        <div>
          <span>{val.stops}</span><br />
          <span>{(val.price * currencyIndex).toFixed(2)}</span>
        </div>
      ))
    }
  </div>
);

TicketList.propTypes = {
  stopsParam: PropTypes.func.isRequired,
  currencyIndex: PropTypes.number.isRequired,
};

export default TicketList;
