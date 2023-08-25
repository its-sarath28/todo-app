import React from 'react'
import Task from './Task'

const TaskList = ({ darkTheme, tasks, onEditTask, onDeleteTask, onToggleCompleted }) => {

  const uncompletedTasks = tasks.filter(task => !task.completed) 
  const completedTasks = tasks.filter(task => task.completed) 

  return (
    <ul>
      {uncompletedTasks.map(task => (
        <Task
          key={task.id}
          task={task}
          darkTheme={darkTheme}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
          onToggleCompleted={onToggleCompleted}
        />
      ))}

      {completedTasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
          onToggleCompleted={onToggleCompleted}
        />
      ))}
    </ul>
  )
}

export default TaskList