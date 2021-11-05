const initialstate = {
  tasks: [],
  filter: "", //done or undone or all
};

export const Addtodo = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Math.random(), description: action.payload, done: false },
        ],
      };
    case "DONE":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, done: !task.done } : task
        ),
      };
    case "DELETE":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    // case "FILALL":
    //   return { ...state };
    case "FILTER":
      return {
        ...state,
        filter: action.payload,
      };

    case "EDIT":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.text }
            : task
        ),
      };
    // case "FILINDONE":
    //   return {
    //     ...state,
    //     tasks: state.tasks.filter((task) => task.done === true),
    //   };
    default:
      return state;
  }
};
