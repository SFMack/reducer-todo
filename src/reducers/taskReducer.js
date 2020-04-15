// reducer - takes multiple inputs and reduces them to a single output
// reducer in Redux (application context) - takes 2 objects, returns 1 object
// -- object1 = state
// -- object2 = action = {type: "ACTION_TYPE", payload: "data to update state"}

// action - object that has a type key and may have a payload

export const initialTaskState = {
  tasks: [
    {
      item: "Item from reducer",
      completed: false,
      id: Math.ceil(Math.random() * 100000),
    },
  ],
};

export const taskReducer = (state = initialTaskState, action) => {
  switch (action.type) {
    case "TOGGLE_EDITING":
      return {
        ...state,
        editing: !state.editing,
      };
    case "TOGGLE_COMPLETE":
      console.log(state);
      return {
        ...state,
        tasks: [...state.tasks],
      };
    case "ADD_TASK":
      return {
        tasks: [
          ...state.tasks,
          {
            item: action.payload,
            completed: false,
            id: Math.ceil(Math.random() * 100000),
          },
        ],
        editing: state.editing,
      };
    default:
      return state;
  }
};
