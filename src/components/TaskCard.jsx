import { useTasks } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div >
      <header>
        <h2>{task.title}</h2>
        <span>{task.done == 1 ? "️✅️" : "❌"}</span>
      </header>
      <p >{task.description}</p>
      <span>{task.createAt}</span>
      <div >
        <button
          
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <button
          
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit
        </button>
        <button
          
          onClick={() => handleDone(task.done)}
        >
          Toggle Task
        </button>
      </div>
    </div>
  );
}

export default TaskCard;