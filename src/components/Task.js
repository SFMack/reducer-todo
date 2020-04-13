import React, { useState, useReducer } from "react";

import { taskReducer, initialTaskState } from "../reducers/taskReducer";

const Task = () => {
  const [taskState, dispatch] = useReducer(taskReducer, initialTaskState);

  const [newTask, setNewTask] = useState("");

  return (
    <div>
      {!taskState.editing ? (
        <>
          <p
            onClick={() => dispatch({ type: "TOGGLE_EDITING" })}
            className="icon"
          >
            Add Task
          </p>
          <div>
            {taskState.tasks.map((item) => (
              <div key={item.id}>
                <h4>{item.item}</h4>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div>
            <input
              className="title-input"
              type="text"
              name="newTask"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button
              onClick={() => {
                dispatch({ type: "ADD_TASK", payload: newTask });
                dispatch({ type: "TOGGLE_EDITING" });
              }}
            >
              Submit
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
