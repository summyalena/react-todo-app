/* eslint-disable */
import React from 'react'
import TodoItem from './TodoItem'

function Todolist(props) {
  return (
    <div className={styles.todoList}>
        {props.data.map(item=>(
          <TodoItem item={item}
          update={props.update}
          handleCheck={props.handleCheck}
                     key={item.id}
                     onDelete={props.onDelete}
                />
        ))}
    </div>
  )
}

export default Todolist