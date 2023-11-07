import React, { useState } from 'react'

export const AddForm = ({ addTask }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(value);
        setValue("");
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <form className="pb-2" onSubmit={handleSubmit}>
            <div className="card">
                <div className="card-body">
                    <div className="d-flex flex-row align-items-center">
                        <input type="text" className="form-control form-control-lg" value={value} id="exampleFormControlInput1"
                            placeholder="Add new..." onChange={handleChange}/>
                        <div>
                            <button type="submit" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
