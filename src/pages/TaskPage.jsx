import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../styles/TaskPage.css";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="container1">
      <div className="container2">
        <div className="container3">
          <button className="returnButton" onClick={() => navigate(-1)}>
            <ChevronLeftIcon />
          </button>
          <h1 className="taskDetails">Detalhes da Tarefa</h1>
        </div>
        <div className="taskInformations">
          <h1 className="taskTitle">{title}</h1>
          <h1 className="taksDescription">{description}</h1>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
