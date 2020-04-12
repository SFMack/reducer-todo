// reducer - takes multiple inputs and reduces them to a single output
// reducer in Redux (application context) - takes 2 objects, returns 1 object
// -- object1 = state
// -- object2 = action = {type: "ACTION_TYPE", payload: "data to update state"}

// action - object that has a type key and may have a payload

export const initialTaskState = {
  title: "title from reducer",
  text: "text from reducer",
  editing: false,
};

export const taskReducer = (state, action) => {
  if (action.type === "TOGGLE_EDITING") {
    return {
      ...state,
      editing: !state.editing,
    };
  } else if (action.type === "UPDATE_TITLE") {
    return {
      ...state,
      title: action.payload,
    };
  } else if (action.type === "UPDATE_TASK_TEXT") {
    return {
      ...state,
      text: action.payload,
    };
  }
  return state;
};
