import React, { Component } from 'react';

class Task extends Component {

    onButtonClick = (event) => {
        const { changeToDone } = this.props;
        const { name } = this.props;
        changeToDone(name);
    }

    render() {

        const { name, state } = this.props;
        const buttonChangeToDone = state === "to do" ? <button 
                                                className="done" 
                                                name={name}
                                                onClick={this.onButtonClick}
                                                >&#x2713;</button> : '' ;
       
        return (
          <li>{name}{buttonChangeToDone}</li> 
        )

    }

}


/// function Task({ name, state }){

//     const buttonDone = state === "to do" ? <button className="done" >&#x2713;</button> : '' ;

//     return (
//       <li>{name}{buttonDone}</li> 
//     );

// }

export default Task;
