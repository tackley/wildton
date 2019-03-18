import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MapDisplay } from './MapDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
          <p>
            Welcome to Wildton and Housetown
          </p>
          <p>
            (Under construction!)
          </p>

          <MapDisplay />
      </div>
    );
  }
}

export default App;
