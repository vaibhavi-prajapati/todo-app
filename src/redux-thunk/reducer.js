import { ADD_TODO, LOG_IN, LOG_OUT, UPDATE_TODO } from "./actions";

const initialState = {
  data: require("./data.json"),
  isLoggedIn: false,
  loading: false,
  error: "",
};

export default function reduxThunkReducer(state = initialState, action) {
  switch (action.type) {

    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true
      };
    }

    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false
      };
    }

    case ADD_TODO: {
      const newData = state.data.map((user) => {
        if (user.name === sessionStorage.getItem("user")) {
          let newTodos = user.todos;
          newTodos.push(action.data);
          return { ...user, todos: newTodos };
        } else return user;
      });
      return {
        ...state,
        data: newData,
      };
    }

    case UPDATE_TODO: {
      const newData = state.data.map((user) => {
        if (user.name === sessionStorage.getItem("user")) {
          let newTodos = action.data;
          return { ...user, todos: newTodos };
        } else return user;
      });
      return {
        ...state,
        data: newData,
      };
    }

    default: {
      return state;
    }
  }
}
