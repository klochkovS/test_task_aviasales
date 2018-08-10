import React from 'react';
import initialData from '../../data/tickets.json';

const TicketList = ({ stopsParam, currency }) => (
  <div>
    {initialData.tickets
      .sort((a, b) => a.price - b.price) // Меняет исходный массив!
      .filter(ticket => stopsParam.includes(ticket.stops))
      .map((val) => {
        return (
          <div>
            <span>{val.stops}</span><br />
            <span>{val.price * currency}</span>
          </div>
        )
      })
    }
  </div>
);

export default TicketList;
