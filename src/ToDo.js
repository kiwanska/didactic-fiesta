import React from 'react';
import Task from './Task';

function ToDo({ tasks }) {

    const { name, state } = tasks;

    const list = tasks.filter(({ state }) => state === 'to do' )
                      .map(({ name }) => <Task name={name} /> );

    return (
      <ul>
        {list}
      </ul>
    );
}

export default ToDo;
