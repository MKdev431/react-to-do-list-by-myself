import { useState } from "react";

export default function Form({ addTask }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (value === "") return;

    addTask(value);

    setValue("");
  }
  return (
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
  );
}
