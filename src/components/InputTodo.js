/* eslint-disable */

import React from 'react'
import { useState } from 'react';
import { FcAddDatabase } from 'react-icons/fc';

function InputTodo(props) {
    const [taskName, setTaskName] = useState({title:''});

    const onChange = (e) => {
        
        setTaskName({
            ...taskName,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(taskName.title.trim()) {
            props.addList(taskName.title);
           setTaskName({title:''});
        } else {
            alert('please input a task')
        }
    }
  return (
    <form onSubmit={handleSubmit} className="form">
       <input className='add-input' type="text" name="title" value={taskName.title} onChange={onChange} placeholder="Add List..."/>
       <button className='add-button' type="submit"><FcAddDatabase/></button>
    </form>
  )
}

export default InputTodo