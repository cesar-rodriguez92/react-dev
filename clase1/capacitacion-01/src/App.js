import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  constructor(){
    super();
    console.log('esta en el constructor');
  }

  componentWillMount(){
    console.log('Esta en el componentWillMount');
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

  componentDidMount(){
    console.log('Llego al componentDidMount');
  }

  componentWillReceiveProps(){
    console.log('Llego al componentWillReceiveProps');
  }

  shouldComponentUpdate(){
    console.log('Esta en el shouldComponentUpdate');
  }

  componentWillUpdate(){
    console.log('Esta en el componentWillUpdate');
  }
}

export default App;
