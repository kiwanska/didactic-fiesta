import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import ToDo from './ToDo';
import Done from './Done';
import logo from './logo.svg';
import '../css/style.css';

class App extends Component {

  state = {
    tasks: [
      {
        name: 'pranie',
        state: 'to do'
      },
      {
        name: 'sprzątanie',
        state: 'to do'
      },
      {
        name: 'odkurzanie',
        state: 'to do'
      },
      {
        name: 'spacer z psem',
        state: 'done'
      }
    ]
  }

  render() {

    const { tasks } = this.state;

    return (
      <div className="App">
        <div className="header">
          <img src={logo} className="react-logo" alt="logo" />
        </div>
        <div>
          <div className="list">
            <h2>TO DO:</h2>
            <ToDo tasks={tasks} />
          </div>
          <div className="list">
            <h2>DONE:</h2>
            <Done tasks={tasks} />
          </div>
        </div>
        <div className="form">
          <h4>ADD NEW TO-DO TASK:</h4>
          <Form />
          <h4> CLEAR ALL DONE TASKS:</h4>
          <button>Clear</button>
        </div>
      </div>
    );
  }
}

export default App;
