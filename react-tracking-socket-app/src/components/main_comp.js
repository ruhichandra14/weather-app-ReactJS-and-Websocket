import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import moment from 'moment';
export default class MainComponent extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: 'http://localhost:5000'
    };
  }
  componentWillMount() {
    //var socket = socketIOClient('https://localhost:3000', { transport : ['websocket'] });
    const { endpoint } = this.state;

    const socket = socketIOClient(endpoint);
    socket.on('FromAPI', data =>
      this.setState({ response: data }, () => {
        console.log(this.state.response);
      })
    );
  }
  renderDate = time => moment(moment.unix(time)).format('hh:mm A');
  renderDetails = resp => (
    <React.Fragment>
      <p>{`The weather summary is: ${resp.currently.summary}`}</p>
      <p>{`The temperature is ${resp.currently.temperature} °F`}</p>
      <p>{`The current time is ${this.renderDate(resp.currently.time)}`}</p>
    </React.Fragment>
  );
  render() {
    const { response } = this.state;
    console.log(response);
    return (
      <div style={{ textAlign: 'center' }}>
        {response ? this.renderDetails(response) : <p>Loading...</p>}
      </div>
    );
  }
}
