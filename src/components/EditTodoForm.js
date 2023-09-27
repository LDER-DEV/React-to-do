import React from 'react'
import {useState} from 'react'


export const EditToDoForm = ({editToDo, listItem}) => {
  const [value, setValue] = useState(listItem.todo);
  const submissionMethod = (e) => {
    e.preventDefault();
    editToDo(value, listItem.id);
    setValue("")
  }
  return(
    <form className='tForm' onSubmit ={submissionMethod}>
      <input type='text' className='toDoInput' placeholder='update task' value ={value} onChange={(e)=> setValue(e.target.value)}></input>
      <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}