import React from 'react'

import { Task } from './Task';

export const TasksList = (props) => {
    const taskList = props.tasks.map((t, i) => {
        if (!Object.hasOwn(t, 'isDeleted') || (Object.hasOwn(t, 'isDeleted') && !t.isDeleted))
            return (<Task key={i} id={t.id} completed={t.completed} task={t.todo} userId={t.userId} handleEdit={props.handleEdit} handleDelete={props.handleDelete} />)
        else {
            return ""
        }
    });

    return (
        <div>{taskList}</div>
    )
}
