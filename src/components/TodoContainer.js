/*eslint-disable */
import React, { useEffect } from 'react'
import TodoList from './TodoList'
import { useState } from 'react'
import InputTodo from './InputTodo'
import {v4 as uuidv4} from 'uuid';
import Header from './header'
import Navbar from './navbar'

function TodoContainer() {

    const [todo, setTodos] = useState(getInitialTodos())
    
    //   const  todos =  [
    //         {id:1,
    //          task: 'cook food by 12pm',
    //          completed: true 
    //         },
    //         {id:2,
    //             task: 'finish the react todo list creation',
    //             completed: true 
    //          },
    //         {id:3,
    //             task: 'deploy it on netlify',
    //             completed: true 
    //         },

    //     ]

      useEffect(()=>{
        const temp = JSON.stringify(todo)
        localStorage.setItem("todo", temp)
      }, [todo])
     
        function getInitialTodos(){
       const temp = localStorage.getItem("todo");
       const savedTodos = JSON.parse(temp);
       return savedTodos || []
        }

   

    const handleCheck = (id) => {
        console.log("clicked", id)
        setTodos(prevState => prevState.map(item=>{
                if(item.id === id) {
                    return {
                        ...item, completed:!item.completed
                    }
                
                }
                return item;
            })
        )
    }

    const Update = (updatedTask, id) => {
        setTodos(prevState => prevState.map(item=>{
            if(item.id === id) {
                item.task = updatedTask
            }
            return item;
        }) )


          setTodos([...todo, newTask])
    }

    const onDelete = (id) => {
        setTodos([...todo.filter(item => {
            return item.id !== id
        })])
    };

    const addList = (title) => {
         const newList = {
            id: uuidv4(),
            task: title,
            completed: false,
         }
         setTodos([...todo, newList])
    }
  return (
    <>
    <Navbar/>
    <div className='todo-container'>
        <div className='wrapper'>
        <Header/>
        <InputTodo addList={addList}/>
        <TodoList update={Update} onDelete={onDelete} handleCheck={handleCheck} data={todo}/>
         </div>
    </div>
    </>
  )
}

export default TodoContainer