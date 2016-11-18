import React, { Component } from 'react';

class Form extends Component {

  state = {
    name: ''
  }
  
  onNameChange = (event) => {
    this.setState({
      name: event.target.value,
    })
  }

  onInputClick = (event) => {
    this.setState({
      name: '',
    })
  }

  onSubmitClick = (event) => {
    const { onFormSubmit } = this.props;
    const { name } = this.state;
    event.preventDefault();
    name ? onFormSubmit(name) : '';
  }

  render() {
    const { name } = this.state;

    return (
      <form>
        <input type="text" 
                placeholder="wpisz kolejne zadanie" 
                value={name} 
                onChange={this.onNameChange} 
                onClick={this.onInputClick} />
        <input type="submit" 
                value="Add" 
                onClick={this.onSubmitClick} /> 
      </form>
    );
  }
}

export default Form;
