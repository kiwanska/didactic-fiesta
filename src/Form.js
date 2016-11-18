import React, { Component } from 'react';

class Form extends Component {

  state = {
    name: 'spacer z psem'
  }
  
  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  onSubmit = (event) => {
    const { onSubmit } = this.props;
    event.preventDefault();
    onSubmit(this.state);
  }

  render() {
    const { name } = this.state;

    return (
      <form>
        <input type="text" value={name} onChange={this.onNameChange} />
        <input type="submit" value="Add" onClick={this.onSubmitClick} /> 
      </form>
    );
  }
}

export default Form;
