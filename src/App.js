import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Form from './Form';
import ToDo from './ToDo';
import Done from './Done';
import logo from './logo.svg';
import '../css/style.css';

class App extends Component {

  state = {
    tasks: [
      {
        id: 1,
        name: 'buy eggplant',
        isDone: true
      },
      {
        id: 2,
        name: 'laundry',
        isDone: true
      },
      {
        id: 3,
        name: 'walk the dog',
        isDone: false
      },
      
      {
        id: 4,
        name: 'mow the lawn',
        isDone: false
      },
      {
        id: 5,
        name: 'save the world',
        isDone: false
      }
    ]
  }

  clearDone = () => {
    const { tasks } = this.state;
    const tasksToDo = tasks.filter(({ isDone }) => (!isDone));
    this.setState({
      tasks: [...tasksToDo]
    })
  }

  addTask = (name) => {
    const { tasks } = this.state;
    const newTask = {name, 
                     isDone: false };
    this.setState({
      tasks: [...tasks, newTask]
    })
  }

  changeToDone = (nameToChange) => {
    const { tasks } = this.state;
    const taskToChange = tasks.filter(({ name, isDone }) => name === nameToChange);
    taskToChange[0].isDone = true;
    this.setState({
      tasks: [...tasks]
    })
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
            <h3>TO DO:</h3>
            <ToDo tasks={tasks} changeToDone={this.changeToDone} />
          </div>
          <div className="list">
            <h3>DONE:</h3>
            <Done tasks={tasks} />
          </div>
        </div>
        <div className="form">
          <h4>ADD NEW TO-DO TASK:</h4>
          <Form onFormSubmit={this.addTask} />
          <h4> CLEAR ALL DONE TASKS:</h4>
          <button onClick={this.clearDone} >Clear</button>
        </div>
      </div>
    );
  }
}

export default App;
