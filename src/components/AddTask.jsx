import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import style from '../styles/ListStyle.module.css'
import { AddIcon } from './AddIcon';

export const AddTask = () => {   
    const [todoFull, setTodoFull] = useState({
        id: uuid(),
        task: '',
        completed: false})

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos'));
        if (todos){
            setTodos(todos)
        }
    },[])
    
    const handleAddTask = () => {

        if (todoFull.task !== '') {
            setTodos([...todos, todoFull]);
            setTodoFull({
                id: uuid(),
                task: '', 
                completed: false})
        }
        localStorage.setItem('todos', JSON.stringify(todos));        
    };
    
    
    const hadleChange = (e) =>{
        setTodoFull((predTodoFull) => ({...predTodoFull, task:e.target.value }))
    };


  return (
    <>
        <input type="text" value={todoFull.task} onChange={hadleChange} className={style.input} placeholder='Enter your task'/>
        <button onClick={handleAddTask}><AddIcon /></button>
       
    </>
  )
}

  
