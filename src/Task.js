import React, { Component } from 'react';

class Task extends Component {

    onButtonClick = (event) => {
        const { changeToDone, name } = this.props;
        changeToDone(name);
    }

    renderButton = () => {
      const { isDone } = this.props;
      console.log(isDone);
      if(!isDone)
        return (
              <button 
                className="to-do" 
                name={name}
                onClick={this.onButtonClick}
              >
                &#x2713;
              </button>
        );
    }

    render() {

        const { name } = this.props;
       
        return (
          <li>
            {name}
            {this.renderButton()}
          </li> 
        )

    }

}

export default Task;
