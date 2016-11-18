import React from 'react';
import Task from './Task';

function ToDo({ tasks }) {

    const list = tasks.filter(({ state }) => state === 'to do' )
                      .map(({ name, state }) => <Task 
                                                    name={name} 
                                                    state={state} 
                                                    changeToDone={'fdskjh'}
                                                    /> );


    return (
      <ul >
        {list}
      </ul>
    );
}

export default ToDo;
