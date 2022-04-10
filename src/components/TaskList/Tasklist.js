import React, { useState } from "react";
import Form from "../Form/Form";
import Task from "../Task/Task";
import "./Tasklist.css";

export default function Tasklist() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updatedTask = [task, ...tasks];
      setTasks(updatedTask);
    }
  };

  const deleteTask = (id) => {
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTasks(updatedTask);
  };

  const completed = (id) => {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTask);
  };
  return (
    <>
      <Form onSubmit={addTask} />
      <div className="lstTaskcontainer">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            taskCompleted={completed}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </>
  );
}
