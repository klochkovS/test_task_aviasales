import React from 'react';

const StopsFilter = ({ handleStops }) => (
  <div className="stops">
    <label>
      Без пересадок
      <input id="stops_0" type="checkbox" onChange={handleStops} />
    </label>
    <label>
      1 Пересадка
      <input id="stops_1" type="checkbox" onChange={handleStops} />
    </label>
    <label>
      2 Пересадки
      <input id="stops_2" type="checkbox" onChange={handleStops} />
    </label>
    <label>
      3 Пересадки
      <input id="stops_3" type="checkbox" onChange={handleStops} />
    </label>
  </div>
);


export default StopsFilter;

