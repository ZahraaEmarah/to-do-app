import React, { useState } from 'react'
import { AddForm } from './AddForm'
import { v4 } from 'uuid';
import { TasksList } from './TasksList';
import { Filters } from './Filters';
v4();

export const Wrapper = () => {
    const [tasks, setTasks] = useState([])

    const addTask = (task) => {
        setTasks([...tasks, { id: v4(), task: task, completed: false, isEditing: false }]);
        console.log(tasks)
    }
    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card" id="list1" style={{ borderRadius: '.75rem', backgroundColor: '#eff1f2' }}>
                            <div className="card-body py-4 px-4 px-md-5">
                                <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                                    <i className="fas fa-check-square me-1"></i>
                                    <u>My Todo-s</u>
                                </p>
                                <AddForm addTask={addTask} />
                                <hr className="my-4"></hr>
                                <Filters/>
                                <TasksList tasks={tasks} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
