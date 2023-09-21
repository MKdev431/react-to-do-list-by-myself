import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  // const [completedTasks, setCompletedTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (value.length >= 3) {
      setTasks(currentTasks => {
        return [...currentTasks, { id: crypto.randomUUID(), title: value, completed: false }];
      });
      setValue("");
    } else {
      alert("Enter task name - not shorter than three characters");
    }
  }

  function toggleTask(id, completed) {
    setTasks(currentTasks => {
      return currentTasks.map(task => {
        if (task.id === id) {
          return { ...task, completed };
        }
        return task;
      });
    });
  }

  function deleteTask(id) {
    setTasks(currentTasks => currentTasks.filter(task => task.id !== id));
  }

  return (
    <div className="app">
      <h1>To-do List</h1>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="text"
          className="text-label"
        >
          Enter task
          <input
            className="text-input"
            type="text"
            id="text"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </label>
        <button className="task-button">Add Task</button>
      </form>
      <p>Tasks:</p>
      {tasks.length === 0 && "No tasks"}
      <ul>
        {tasks.map(task => {
          return (
            <li key={task.id}>
              <label
                htmlFor=""
                className="task-label"
              >
                <input
                  type="checkbox"
                  className="checkbox-input"
                  checked={task.completed}
                  onChange={e => toggleTask(task.id, e.target.checked)}
                />
                {task.title}
              </label>
              <button
                onClick={() => deleteTask(task.id)}
                className="delete-button"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      {/* <hr />
      <p>Done tasks:</p>
      <ul>
        {completedTasks.map(completedTask => {
          return (
            <li key={completedTask.id}>
              <label
                htmlFor=""
                className="task-label"
              >
                <input
                  type="checkbox"
                  className="checkbox-input"
                  checked={completedTask.completed}
                  onChange={e => toggleTask(completedTask.id, e.target.checked)}
                />
                {completedTask.title}
              </label>
              <button
                onClick={() => deleteTask(completedTask.id)}
                className="delete-button"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}

export default App;
