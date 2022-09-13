/* eslint-disable */

import React from 'react'
import styles from './TodoItem.module.css'
import { useState } from 'react'
 import { AiFillDelete } from 'react-icons/ai';

function TodoItem(props) {
  const completedStyle = {
      fontStyle: 'italic',
      color:'#595959',
      opacity: 0.5,
      textDecoration: "line-through",
  }

const {id, task, completed} = props.item
const [edit, setEdit] = useState(false);


  const handleEdit = () => {
     console.log("my babe")
     setEdit(true);
  }

  let viewMode = {}
  let editMode = {}
  if(edit){
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  const handleUpdateDone = (e) => {
      if(e.key === 'Enter'){
        setEdit(false);
      }
  }
  return (
    <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.div} style={viewMode} onDoubleClick={handleEdit}>
          <input  className={styles.checkbox} checked={completed} type="checkbox" onChange={()=> props.handleCheck(id)}/>
       <span  style={completed ? completedStyle : null}> {task} </span>
        <button className={styles.delButton} id={id} onClick={()=>props.onDelete(id)}><AiFillDelete/></button>
        </div>
        <input style={editMode}
        onKeyDown={handleUpdateDone}
        onChange={(e)=>props.update(e.target.value, id)} 
        className={styles.inputNew} type="text" />
        </div>
    </div>
  )
}

export default TodoItem