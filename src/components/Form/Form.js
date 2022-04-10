import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Form.css";

export default function Form({ onSubmit }) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false,
    };
    onSubmit(newTask);
  };

  return (
    <form className="taskform" onSubmit={manejarEnvio}>
      <input
        className="inputTask"
        type="text"
        placeholder="Escribe una tarea"
        name="text"
        onChange={manejarCambio}
      />
      <button className="taskbutton">Agregar</button>
    </form>
  );
}
