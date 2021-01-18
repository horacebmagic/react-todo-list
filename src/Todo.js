import React, { useState } from 'react'

export default function Todo(props) {
  const task = props.task
  const [isEdit, setIsEdit] = useState('')
  const [updateTask, setUpdateTask] = useState('')
  const handleRemove = () => {
    props.remove(task.id)
  }
  const handleComplete = () => {
    props.complete(task.id)
  }
  const handleUpdate = e => {
    if (e.keyCode === 13 && e.target.value !== '') {
      let editTask = {}
      props.update({ ...editTask, id: task.id, name: updateTask })
      setIsEdit(!isEdit)  
    }
  }
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: 'solid 1px #f2f2f2' }}>
        {isEdit
          ? <input type="text" name="updateTask" value={ updateTask } onChange={ e => { setUpdateTask(e.target.value) } } onKeyUp={ handleUpdate } />
          : <span style={ task.isComplete ? { textDecoration: 'line-through' } : { textDecoration: 'none' } }>
              { task.name }
            </span>
        }
        <span 
          style={{ fontSize: '10px', cursor: 'pointer', color: 'grey', marginLeft: 'auto' }}
          onClick={ () => { setIsEdit(!isEdit); setUpdateTask(task.name) } }>
          { isEdit ? '[cancel]' : '[edit]' }
        </span>
        <span style={ task.isComplete 
          ? { fontSize: '10px', cursor: 'pointer', color: 'green' } 
          : { fontSize: '10px', cursor: 'pointer', color: 'grey' }} onClick={ handleComplete }>
          {task.isComplete ? '[completed]' : '[complete]' }
        </span>
        <span style={{ fontSize: '10px', cursor: 'pointer', color: 'grey' }} onClick={ handleRemove }>[remove]</span>
      </div>
    </>
  )
}
