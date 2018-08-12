import React from 'react';
import PropTypes from 'prop-types';
import initialData from '../../../data/tickets.json';
import Ticket from '../Ticket/Ticket';

const TicketList = ({ stopsParam, currencyIndex }) => (
  <div>
    {initialData.tickets
      .sort((a, b) => a.price - b.price) // Меняет исходный массив!
      .filter(ticket => stopsParam.includes(ticket.stops))
      .map(val => (
        <div>
          <Ticket tripData={val} currencyIndex={currencyIndex} />
        </div>
      ))
    }
  </div>
);

TicketList.propTypes = {
  stopsParam: PropTypes.arrayOf(PropTypes.number).isRequired,
  currencyIndex: PropTypes.number.isRequired,
};

export default TicketList;
