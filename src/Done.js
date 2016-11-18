import React from 'react';
import Task from './Task';

function Done({ tasks }) {

    console.log(tasks);

    const list = tasks.filter(({ state }) => state === 'done' )
                      .map(({ name }) => <Task name={name} /> );

    return (
      <ul>
        {list}
      </ul>
    );
}

export default Done;
