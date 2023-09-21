import Item from "./Item";

export default function List({ tasks, toggleTask, deleteTask }) {
  return (
    <ul>
      {tasks.length === 0 && "No tasks"}
      {tasks.map(task => {
        return (
          <Item
            {...task}
            key={task.id}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        );
      })}
    </ul>
  );
}
