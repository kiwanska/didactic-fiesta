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
        name: 'podlewanie kwiatków',
        state: 'done'
      },
      {
        name: 'spacer z psem',
        state: 'done'
      },
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
      }
    ]
  }

  clearDone = () => {
    const { tasks } = this.state;
    const tasksToDo = tasks.filter(({ state }) => state === 'to do');
    this.setState({
      tasks: [...tasksToDo]
    })
  }

  addTask = (name) => {
    const { tasks } = this.state;
    const newTask = {name, 
                     state: 'to do' };
    this.setState({
      tasks: [...tasks, newTask]
    })
  }

  changeToDone = (event) => {
    const { tasks } = this.state;
    const taskToChange = tasks.filter(({ name, state }) => name === event);
    taskToChange[0].state = "done";
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
