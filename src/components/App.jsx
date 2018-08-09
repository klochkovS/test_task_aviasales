import React, { Component } from 'react';
import TicketList from './TicketList';
import FilterList from './FilterList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopsParam: [],
      currency: 'eur',
    };

    this.handleStops = this.handleStops.bind(this);
    this.handleCurrencyControl = this.handleCurrencyControl.bind(this);
  }

  handleCurrencyControl(event) {
    this.setState({ currency: event.target.innerText.toLowerCase() });
  }

  handleStops(event) {
    const { stopsParam } = this.state;
    switch (event.target.id) {
      case 'stops_0': {
        event.target.checked
          ? this.setState({ stopsParam: [...stopsParam, 0] })
          : this.setState({ stopsParam: stopsParam.filter(v => v !== 0) });
        break;
      }
      case 'stops_1': {
        event.target.checked
          ? this.setState({ stopsParam: [...stopsParam, 1] })
          : this.setState({ stopsParam: stopsParam.filter(v => v !== 1) });
        break;
      }
      case 'stops_2': {
        event.target.checked
          ? this.setState({ stopsParam: [...stopsParam, 2] })
          : this.setState({ stopsParam: stopsParam.filter(v => v !== 2) });
        break;
      }
      case 'stops_3': {
        event.target.checked
          ? this.setState({ stopsParam: [...stopsParam, 3] })
          : this.setState({ stopsParam: stopsParam.filter(v => v !== 3) });
        break;
      }
      default:
        return false;
    }
  }

  render() {
    const { stopsParam, currency } = this.state;
    return (
      <div className="App">
        <FilterList
          handleStops={this.handleStops}
          handleCurrencyControl={this.handleCurrencyControl}
        />
        <TicketList stopsParam={stopsParam} currency={currency} />
      </div>
    );
  }
}

export default App;
