import uuid from "react-uuid";
// Action value
const TODO_ADD = "TODO_ADD";
const DELETE_TODO = "DELETE_TODO";
const OK_TODO = "OK_TODO";

// Action Creator
export const todoadd = (payload) => {
  return {
    type: TODO_ADD,
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const okTodo = (payload) => {
  return {
    type: OK_TODO,
    payload,
  };
};
// 초기값
const initialState = {
  todos: [
    { id: uuid(), title: "밥먹기", content: "세끼먹기", isdone: false },
    { id: uuid(), title: "잠자기", content: "푹자기", isdone: true },
    { id: uuid(), title: "고양이밥주기", content: "참치캔으로", isdone: false },
  ],
};
// reducer
const todomake = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case OK_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isdone: !todo.isdone }
            : { ...todo }
        ),
      };
    default:
      return state;
  }
};

export default todomake;
