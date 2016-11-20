import React from 'react';
import Task from './Task';

function Done({ tasks }) {

    const list = tasks.filter(({ isDone }) => (isDone) )
                      .map(({ name, isDone }) => <Task name={name} isDone={isDone} /> );

    return (
      <ul>
        {list}
      </ul>
    );
}

export default Done;
