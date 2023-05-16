import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Koldo Arretxea Portfolio</h1>
        <div><h2>{moment().format('MMMM D YYYY, h:mm:ss a')}</h2></div>
        <h3>React Redux Router</h3>
      </div>
    );
  }
}
