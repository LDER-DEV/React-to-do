import React, {useState} from 'react';
import {ToDoForm} from './TodoForm';
import { ToDo } from './Todo';
import { EditToDoForm } from './EditTodoForm';
import {v4 as uuidv4} from 'uuid';

uuidv4();

export const ToDoContainer = () => {
  const [tasks, setTasks] = useState([])

  const addTaskFunction = (task) =>{
    setTasks([...tasks,{id: uuidv4(), todo: task, completed:false, isEditing: false}])
    console.log(tasks)
  }

  const toggleCompleteFunction = (id) =>{
    setTasks(tasks.map(todo => todo.id === id ? {...todo, completed : !todo.completed} : todo))
  }
  const deleteTaskFunction =(id) =>{
    setTasks(tasks.filter(todo => todo.id !== id))
  }
  const editTaskFunction = (id) =>{
    setTasks(tasks.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }
  const editTodo = (todo, id) =>{
    setTasks(tasks.map(task => task.id === id ? {...task, todo, isEditing: !task.isEditing} : task))
  }
  return (
    <div className='toDoContainer'>
      <h1>To-Do List</h1>
      <ToDoForm addTask = {addTaskFunction}/>
      {tasks.map((todo, index)=>{
       return todo.isEditing ?(<EditToDoForm 
        editToDo = {editTodo}
        listItem ={todo} key={index} />) : (
        <ToDo listItem ={todo} key={index}
        toggleComplete={toggleCompleteFunction}
        deleteTask = {deleteTaskFunction}
        editTask = {editTaskFunction} />)
        
      })}

    </div>
  )
}