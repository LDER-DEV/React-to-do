import React from 'react'
import {useState} from 'react'


export const ToDoForm = ({addTask}) => {
  const [value, setValue] = useState("");
  const submissionMethod = (e) => {
    e.preventDefault();
    addTask(value);
    setValue("")
  }
  return(
    <form className='tForm' onSubmit ={submissionMethod}>
      <input type='text' className='toDoInput' placeholder='What is your next task?' value ={value} onChange={(e)=> setValue(e.target.value)}></input>
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}