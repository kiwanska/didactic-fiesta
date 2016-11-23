import React, { Component } from 'react';

class Form extends Component {

  state = {
    
  }

  clearInput = () => this.ref.value = '';

  onSubmitClick = (event) => {
    const { onFormSubmit } = this.props;
    const name = this.ref.value;
    event.preventDefault();
    name && onFormSubmit(name);
    this.clearInput();
  }

  render() {

    return (
      <form>
        <label>
          Check weather in:
          <input 
            ref={(ref) => this.ref = ref}
            type="text" 
            placeholder="city name" 
            onClick={this.clearInput} 
          />
        </label>
        <input 
          type="submit" 
          value="go!" 
          onClick={this.onSubmitClick} 
        /> 
      </form>
    );
  }
}

export default Form;






