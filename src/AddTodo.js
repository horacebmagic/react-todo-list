import React, { useState } from 'react'

export default function Addtodo(props) {
  const [name, setName] = useState('')
  const handleAddTask = e => {
    if (e.keyCode === 13 && e.target.value !== '') {
      props.addTask(name) 
      setName('')
      e.target.value = ''
    } 
  }
  return (
    <div>
      <input 
        type="text" 
        name={ name } 
        onChange={ e => setName(e.target.value) } 
        onKeyDown={ handleAddTask } 
        placeholder="add task here..." />
    </div>
  )
}
