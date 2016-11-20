import React, { Component } from 'react';
import Task from './Task';

function ToDo({ tasks, changeToDone }) {

    const list = tasks.filter(({ isDone }) => (!isDone) )
                      .map(({ name, isDone }) => <Task 
                                                    name={name} 
                                                    isDone={isDone} 
                                                    changeToDone={changeToDone}
                                                    /> );

    return (
      <ul >
        {list}
      </ul>
    )


    
}

export default ToDo;

