import React from 'react'
import { useState } from 'react';

export const EditForm = (props) => {
  const [value, setValue] = useState(props.task);

  const handleSubmit = async (event) => {
    props.setLoader(true);
    event.preventDefault();
    props.setIsEditing(false);
    await props.handleEdit(props.id, value, props.completed, props.userId);
    props.setLoader(false);
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
              placeholder="Edit Task ..." onChange={handleChange} />
            <div>
              <button type="submit" className="btn btn-primary">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
