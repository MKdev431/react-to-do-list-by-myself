import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>To-do List</h1>
      <form>
        <label
          htmlFor="text"
          className="text-label"
        >
          Enter task
          <input
            className="text-input"
            type="text"
            id="text"
          />
        </label>
        <button className="task-button">Add Task</button>
      </form>
      <p>Tasks:</p>
      <ul>
        <li>
          <label
            htmlFor=""
            className="task-label"
          >
            <input
              type="checkbox"
              className="checkbox-input"
            />
            Task
          </label>
          <button className="delete-button">Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
