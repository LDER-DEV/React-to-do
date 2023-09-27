import React from 'react'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const ToDo = ({listItem, toggleComplete, deleteTask, editTask})=> {
  return (
    <div className ='toDo'>
      <p onClick={()=> toggleComplete(listItem.id)} className={`${listItem.completed ?'completed':'' }`}>{listItem.todo}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={()=> editTask(listItem.id) } />
        <FontAwesomeIcon icon={faTrash} onClick={()=> deleteTask(listItem.id)} />
        
      </div>
    </div>
  )
}