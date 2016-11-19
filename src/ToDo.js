import React, { Component } from 'react';
import Task from './Task';

class ToDo extends Component {

    changeToDone = (event) => {
        const { changeToDone } = this.props;
        changeToDone(event);
    }

    render () {
        const { tasks } = this.props;
        const { changeToDone } = this.changeToDone;

        const list = tasks.filter(({ state }) => state === 'to do' )
                          .map(({ name, state }) => <Task 
                                                        name={name} 
                                                        state={state} 
                                                        changeToDone={this.changeToDone}
                                                        /> );

        return (
          <ul >
            {list}
          </ul>
        );
    }

    
}

export default ToDo;
