import React from 'react'

export const TasksList = (props) => {

    const taskList = props.tasks.map(t => {
        return(
            <li key={t.id}>
                <input type='checkbox' value={t.completed}/>
                {t.task}
            </li>
        )
    });
    
    return (
        <ul>{taskList}</ul>
    )
}
