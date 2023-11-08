import React, { useState } from 'react'
import { EditForm } from './EditForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Loader } from './Loader'

export const Task = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setLoader] = useState(false);

    const handleCheckBox = (event) => {
        let checked = event.target.checked;
        props.handleEdit(props.id, props.task, checked, props.userId)
    }

    const deleteClicked = async () => {
        setLoader(true);
        await props.handleDelete(props.id);
        setLoader(false);
    }

    return (
        <div>
            <ul className="list-group list-group-horizontal rounded-0 bg-transparent">
                <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent" key="loader"></li>
                <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent" key="checkbox">
                    <input className="form-check-input me-0" type="checkbox" defaultChecked={props.completed} aria-label="..." onClick={handleCheckBox} />
                </li>
                <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent" key="task">
                    <p className="lead fw-normal mb-0">{props.task}</p>
                </li>
                <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent" key="controls">
                    <div className="d-flex flex-row justify-content-end mb-1">
                        {   isLoading? <Loader />: ""   }
                        <a href="#!" className="text-info" data-mdb-toggle="tooltip" title="Edit task" onClick={() => setIsEditing(true)}><FontAwesomeIcon className='me-3' icon={faPenToSquare} /></a>
                        <a href="#!" className="text-danger" data-mdb-toggle="tooltip" title="Delete task"><FontAwesomeIcon icon={faTrash} onClick={deleteClicked} /></a>
                    </div>
                </li>
            </ul>
            {   isEditing ? <EditForm id={props.id} task={props.task} completed={props.completed} userId={props.userId} setIsEditing={setIsEditing} handleEdit={props.handleEdit} setLoader={setLoader}/> : ""   }
        </div>
    )
}
