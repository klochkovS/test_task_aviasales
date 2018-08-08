import React, { Component } from 'react';
import initialData from '../../data/tickets.json';

class StopsFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopsParam: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { stopsParam } = this.state;
    switch (event.target.id) {
      case 'stops_0': {
        event.target.checked
          ? this.setState({ stopsParam: [...stopsParam, 0] })
          : this.setState({ stopsParam: stopsParam.filter(v => v !== 0) })
        break;
      }
      case 'stops_1': {
        event.target.checked
          ? this.setState({ stopsParam: [...stopsParam, 1] })
          : this.setState({ stopsParam: stopsParam.filter(v => v !== 1) })
        break;
      }
      case 'stops_2': {
        event.target.checked
          ? this.setState({ stopsParam: [...stopsParam, 2] })
          : this.setState({ stopsParam: stopsParam.filter(v => v !== 2) })
        break;
      }
      case 'stops_3': {
        event.target.checked
          ? this.setState({ stopsParam: [...stopsParam, 3] })
          : this.setState({ stopsParam: stopsParam.filter(v => v !== 3) })
        break;
      }
      default:
        return false;
    }
  }

  render() {
    const { stopsParam } = this.state;
    return (
      <div className="stops">
        <label>
          Без пересадок
          <input id="stops_0" type="checkbox" onChange={this.handleChange} />
        </label>
        <label>
          1 Пересадка
          <input id="stops_1" type="checkbox" onChange={this.handleChange} />
        </label>
        <label>
          2 Пересадки
          <input id="stops_2" type="checkbox" onChange={this.handleChange} />
        </label>
        <label>
          3 Пересадки
          <input id="stops_3" type="checkbox" onChange={this.handleChange} />
        </label>
        <div>
          {initialData.tickets
            .filter(ticket => stopsParam.includes(ticket.stops))
            .map(val => <span>{val.stops}</span>)
          }
        </div>
        <h1>_________________</h1>
      </div>
    );
  }
}

export default StopsFilter;

//
