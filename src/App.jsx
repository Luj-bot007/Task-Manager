import { useState } from "react"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    }

    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <TaskForm addTask={addTask} />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </div>
  )
}

export default App