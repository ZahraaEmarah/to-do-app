import React from 'react'

export const AddForm = () => {
  return (
    <form className='add-form'>
        <input type='text' className='todo-input' placeholder='e.g. buy some eggs'/>
        <button type='submit' className='add-btn'>Add</button>
    </form>
  )
}
