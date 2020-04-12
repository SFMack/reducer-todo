import React, { useState, useReducer } from "react";

import { taskReducer, initialTaskState } from "../reducers/taskReducer";

const Task = () => {
  const [taskState, dispatch] = useReducer(taskReducer, initialTaskState);

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskText, setNewTaskText] = useState("");

  return (
    <div>
      {!taskState.editing ? (
        <>
          <h1>
            {taskState.title}
            <p
              onClick={() => dispatch({ type: "TOGGLE_EDITING" })}
              className="icon"
            >
              Edit
            </p>
          </h1>
          <p>{taskState.text}</p>
        </>
      ) : (
        <>
          <div>
            <input
              className="title-input"
              type="text"
              name="newTaskTitle"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
            />
            <input
              className="text-input"
              type="text"
              name="newTaskText"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
            />
            <button
              onClick={() => {
                dispatch({ type: "UPDATE_TITLE", payload: newTaskTitle });
                dispatch({ type: "UPDATE_TASK_TEXT", payload: newTaskText });
                dispatch({ type: "TOGGLE_EDITING" });
              }}
            >
              Add Task
            </button>
            <button
              onClick={() => {
                dispatch({ type: "TOGGLE_EDITING" });
              }}
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Task;
