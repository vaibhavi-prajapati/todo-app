export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const logIn = () => (dispatch) => {
  dispatch({ type: LOG_IN });
};

export const logOut = () => (dispatch) => {
  dispatch({ type: LOG_OUT });
};

export const addTodo = (data) => (dispatch) => {
  dispatch({ type: ADD_TODO, data });
};

export const updateTodo = (data) => (dispatch) => {
  dispatch({ type: UPDATE_TODO, data });
};
