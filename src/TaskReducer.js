export const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  PATCH_TODO: "PATCH_TODO",
  DELETE_TODO: "DELETE_TODO",
  SORT_TODO: "SORT_TODO",
};

export const TaskReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: action.payload.todo.sort((a, b) => b.id - a.id),
      };

    case ACTIONS.TOGGLE_TODO:
      return { ...state, todos: action.payload.todo };

    case ACTIONS.PATCH_TODO:
      return { ...state, todos: action.payload.todo };

    case ACTIONS.DELETE_TODO:
      return { ...state, todos: action.payload.todo };

    case ACTIONS.SORT_TODO:
      return { ...state, todos: action.payload.todo };

    default:
      return state;
  }
};
