import { useState } from "react";
import Input from "./Input.jsx";
import "../styles/AddTasks.css";

export default function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="container">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        className="AddButton"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa.");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}
