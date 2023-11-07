import React, { useState } from 'react'

export const AddForm = ({ addTask }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(value);
        addTask(value);
        setValue("");
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div class="pb-2">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex flex-row align-items-center">
                        <input type="text" className="form-control form-control-lg" id="exampleFormControlInput1"
                            placeholder="Add new..." onChange={handleChange}/>
                        <div>
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
