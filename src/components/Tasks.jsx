import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "../styles/Tasks.css";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    navigate(`/task?title=${task.title}&description=${task.description}`);
  }

  return (
    <ul className="taskList">
      {tasks.map((task) => (
        <li key={task.id} className="itemTaskList">
          <div>{task.isCompleted && <CheckIcon />}</div>
          <button className="button" onClick={() => onTaskClick(task.id)}>
            {task.title}
          </button>

          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
