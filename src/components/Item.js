export default function Item({ completed, id, title, toggleTask, deleteTask }) {
  return (
    <li>
      <label
        htmlFor=""
        className="task-label"
      >
        <input
          type="checkbox"
          className="checkbox-input"
          checked={completed}
          onChange={e => toggleTask(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        onClick={() => deleteTask(id)}
        className="delete-button"
      >
        Delete
      </button>
    </li>
  );
}
