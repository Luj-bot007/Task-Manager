function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <div className="task">
      <span
        className={task.completed ? "completed" : ""}
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
      </span>

      <button onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  )
}

export default TaskItem