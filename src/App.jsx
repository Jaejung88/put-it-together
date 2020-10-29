import React, { Component } from 'react';
import './App.css';
import Birthday from './components/Birthday'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jane: {
        firstName: "Jane",
        lastName: "Doe",
        age: 45,
        hairColor: "Black"
      },
      john: {
        firstName: "John",
        lastName: "Smith",
        age: 88,
        hairColor: "Brown"
      }
    }
  }
  render() {
    return (
      <div className="App">
        <Birthday
          person = {this.state.jane}
        />
        <Birthday 
          person = {this.state.john}
        />
      </div>
    );
    }
}

export default App;
