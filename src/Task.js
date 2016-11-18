import React, { Component } from 'react';


class Task extends Component {

    onButtonClick = (event) => {
        console.log(event.target);
        // changeToDone(name)
    }


    render() {

        const { name, state } = this.props;
        const buttonDone = state === "to do" ? <button 
                                                className="done" 
                                                name={name}
                                                onClick={this.onButtonClick}
                                                >&#x2713;</button> : '' ;
       
        return (
          <li>{name}{buttonDone}</li> 
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
