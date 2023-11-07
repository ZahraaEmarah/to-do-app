import React from 'react'
import { StateCheckBox } from './StateCheckBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export const Task = (props) => {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${day}/${month}/${year}`;
    return (
        <ul className="list-group list-group-horizontal rounded-0 bg-transparent">
            <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent" key="checkbox">
                <StateCheckBox completed={props.completed} />
            </li>
            <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent" key="task">
                <p className="lead fw-normal mb-0">{props.task}</p>
            </li>
            <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent" key="controls">
                <div className="d-flex flex-row justify-content-end mb-1">
                    <a href="#!" className="text-info" data-mdb-toggle="tooltip" title="Edit task"><FontAwesomeIcon className='me-3' icon={faPenToSquare} /></a>
                    <a href="#!" className="text-danger" data-mdb-toggle="tooltip" title="Delete task"><FontAwesomeIcon icon={faTrash} /></a>
                </div>
                <div className="text-end text-muted">
                    <a href="#!" className="text-muted" data-mdb-toggle="tooltip" title="Created date">
                        <p className="small mb-0"><FontAwesomeIcon className="me-2" icon={faInfoCircle}/>{currentDate}</p>
                    </a>
                </div>
            </li>
        </ul>
    )
}
