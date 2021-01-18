import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import Addtodo from './AddTodo'
import Todo from './Todo'

export default function Todolists() {
  const [tasks, setTask] = useState([])
  const addTask = task => {
    let newTask = { name: task, id: uuid(), isComplete: false }
    setTask([ ...tasks, newTask ])
  }
  const remove = id => {
    let task = tasks.filter(task => task.id !== id)
    setTask([ ...task ])
  }
  const complete = id => {
    let task = tasks.map(t => {
      if (t.id === id) {
        return { ...t, isComplete: !t.isComplete } 
      }
      return t
    })
    setTask([ ...task ])
  }
  const update = editTask => {
    let updateTask = tasks.map(task => {
      if (task.id === editTask.id) {
        return { ...task, name: editTask.name }
      }
      return task
    })
    setTask([ ...updateTask ])
  }
  return (
    <div style={{ width: '300px', margin: '0 auto' }}>
      {tasks.length > 0 
        ? tasks.map(task => <Todo key={ task.id } task={ task } remove={ remove } complete={ complete } update={ update } />)
        : <div>no task available</div>
      }
      <Addtodo addTask={ addTask } />
    </div>
  )
}