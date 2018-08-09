import React from 'react';
import initialData from '../../data/tickets.json';

const usd = 66;
const eur = 76.59;

const TicketList = ({ stopsParam, currency }) => (
  <div>
    {initialData.tickets
      .sort((a, b) => a.price - b.price) // Меняет исходный массив!
      .filter(ticket => stopsParam.includes(ticket.stops))
      .map((val) => {
        return (
          <div>
            <span>{val.stops}</span><br />
            <span>{
              currency === 'usd' ?
                val.price / usd :
                currency === 'eur' ?
                  val.price / eur :
                  val.price
            }</span>
          </div>
        )
      })
    }
  </div>
);

export default TicketList;
