import React from 'react';
import initialData from '../../data/tickets.json';


const TicketList = ({ stopsParam }) => (
  <div>
    {initialData.tickets
      .sort((a, b) => a.price - b.price) // Меняет исходный массив!
      .filter(ticket => stopsParam.includes(ticket.stops))
      .map(val => <span>{val.stops}</span>)
    }
  </div>
);

export default TicketList;
