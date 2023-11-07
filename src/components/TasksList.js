import React from 'react'

import { Task } from './Task';

export const TasksList = (props) => {
    const taskList = props.tasks.map((t, i) => <Task key={i} id={t.id} completed={t.completed} task={t.task} />);
    return (
        <div>{taskList}</div>
    )
}
