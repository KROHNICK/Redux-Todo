export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const NEW_TODO = "NEW_TODO";

export const toggleComplete = index => {
  return {
    type: TOGGLE_COMPLETE,
    payload: index
  };
};

export const newTodo = todo => {
  return {
    type: NEW_TODO,
    payload: todo
  };
};
