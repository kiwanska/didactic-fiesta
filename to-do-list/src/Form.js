import React, { PureComponent } from 'react';

class Form extends PureComponent {

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
        <input 
          ref={(ref) => this.ref = ref}
          type="text" 
          placeholder="another task" 
          onClick={this.clearInput} 
        />
        <input 
          type="submit" 
          value="Add" 
          onClick={this.onSubmitClick} 
        /> 
      </form>
    );
  }
}

export default Form;
