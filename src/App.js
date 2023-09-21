import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [tasks, setTasks] = useState([]);
  // const [completedTasks, setCompletedTasks] = useState([]);

  function addTask(title) {
    setTasks(currentTasks => {
      return [...currentTasks, { id: crypto.randomUUID(), title, completed: false }];
    });
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
      <Form addTask={addTask} />
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
