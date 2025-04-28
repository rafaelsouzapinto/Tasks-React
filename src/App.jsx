import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /*
  // Consumo de API web com tarefas, para fins de teste

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );

      const json = await response.json();
      console.log(json);
      setTasks(json);
    };

    fetchData();
  }, []);
*/

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length + 2,
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div>
      <div>
        <h1 className="title">Gerenciador de Tarefas</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
