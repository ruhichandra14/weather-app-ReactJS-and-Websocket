import React, { Component } from "react";
import socketIOClient from "socket.io-client";
export default class MainComponent extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://localhost:3000"
    };
  }
  componentDidMount() {
    //var socket = socketIOClient('https://localhost:3000', { transport : ['websocket'] });
    const { endpoint } = this.state;
  
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }
  render() {
      console.log("response ",response);
    const { response } = this.state;
    return (
        <div style={{ textAlign: "center" }}>
          {response
              ? <p>
                The temperature is: {response} °F
              </p>
              : <p>Loading...</p>}
        </div>
    );
  }
}
