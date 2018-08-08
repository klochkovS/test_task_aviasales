import React from 'react';
import initialData from '../../data/tickets.json';


const TicketList = () => (
  <div>
    {
      initialData.tickets.sort((a, b) => a.price - b.price) // Меняет исходный массив!
        .map(val => (
          <div>
            <p>{val.price}</p>
            <p>Stops: {val.stops}</p>
          </div>
        ))
    }
  </div>
);

export default TicketList;
