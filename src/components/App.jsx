import React, { Component } from 'react';
import fetch from 'cross-fetch';
import TicketList from './TicketList';
import FilterList from './FilterList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopsParam: [],
      currencyCode: 'rub',
      currencyIndex: 1,
      isLoading: false,
    };

    this.handleStops = this.handleStops.bind(this);
    this.handleCurrencyControl = this.handleCurrencyControl.bind(this);
  }

  handleCurrencyControl(event) {
    const currencyCode = event.target.innerText.toUpperCase();
    this.setState({ currencyCode, isLoading: true });
    const url = `https://free.currencyconverterapi.com/api/v6/convert?q=RUB_${currencyCode}&compact=ultra`;
    fetch(url)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('Bad response from server');
        }
        return res.json();
      })
      .then(json => this.setState({
        currencyIndex: json[`RUB_${currencyCode.toUpperCase()}`],
        isLoading: false,
      }))
      .catch(error => console.error(error));
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
    const { stopsParam, currencyIndex, isLoading, currencyCode } = this.state;
    return (
      <div className="App">
        <FilterList
          currencyCode={currencyCode}
          handleStops={this.handleStops}
          handleCurrencyControl={this.handleCurrencyControl}
        />
        {isLoading
          ? <span>Загрузка курса</span>
          : true}
        <TicketList
          stopsParam={stopsParam}
          currencyIndex={currencyIndex}
        />
      </div>
    );
  }
}


export default App;
