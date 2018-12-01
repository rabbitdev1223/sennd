import React, { Component } from 'react';
import './App.css';
import {FileDrop} from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
       Dropzone 
       <FileDrop />
      </div>
    );
  }
}

export default App;
