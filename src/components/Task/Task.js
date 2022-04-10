import React from "react";
import "./Task.css";
import { AiOutlineDelete } from "react-icons/ai";

export default function Task(props) {
  return (
    <div
      className={props.completed ? "taskcontainer completed" : "taskcontainer"}
    >
      <div className="tasktxt" onClick={() => props.taskCompleted(props.id)}>
        {props.text}
      </div>
      <div className="taskIcon-container">
        <AiOutlineDelete
          className="taskIcon"
          onClick={() => props.deleteTask(props.id)}
        />
      </div>
    </div>
  );
}
