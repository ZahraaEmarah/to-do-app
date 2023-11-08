import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { AddForm } from './AddForm'
import { TasksList } from './TasksList';
import { getTasks, deleteTask, addTask, editTask } from '../api/TaskRouter'
import { Loader } from './Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Wrapper = () => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setLoader] = useState(false);

    const showErrorMessage = () => toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored"
    });

    useEffect(() => {
        setLoader(true);
        async function fetchData() {
            let response = await getTasks();
            setTasks(response.data.todos);
            setLoader(false);
        }
        try {
            fetchData();
        } catch (error) {
            showErrorMessage();
        }
    }, []);

    const handleAdd = async (task) => {
        setLoader(true);
        try {
            const response = await addTask(task);
            setTasks([...tasks, response.data]);
        } catch (error) {
            showErrorMessage();
        }
        setLoader(false);
    }

    const handleEdit = async (id, task, isCompleted, userId) => {
        try {
            const response = await editTask(id, task, isCompleted, userId);
            setTasks(tasks.map(t => {
                return t.id === id ? response.data : t;
            }))
        } catch (error) {
            showErrorMessage();
        }
    }

    const handleDelete = async (id) => {
        try {
            const response = await deleteTask(id);
            setTasks(tasks.map(t => {
                return t.id === id ? response.data : t;
            }))
        } catch (error) {
            showErrorMessage();
        }
    }

    return (
        <section className="vh-100">
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick theme="colored" />
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card" id="list1" style={{ borderRadius: '.75rem', backgroundColor: '#eff1f2' }}>
                            <div className="card-body py-4 px-4 px-md-5">
                                <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                                    <FontAwesomeIcon icon={faCheckSquare} className="me-1" />
                                    <u>My Todo-s</u>
                                </p>
                                <AddForm addTask={handleAdd} />
                                <hr className="my-4"></hr>
                                {isLoading ? <Loader /> : ""}
                                <TasksList handleEdit={handleEdit} handleDelete={handleDelete} tasks={tasks} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
