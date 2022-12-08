import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, okTodo } from "../../redux/modules/module";
import Todo from "../todo/Todo";

function List() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.modules.todos);
  const deleteTodohandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const okTodohandler = (id) => {
    dispatch(okTodo(id));
  };

  return (
    <div className="list-container">
      <h2>하는중.. 🔥</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (!todo.isdone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                handleDelete={deleteTodohandler}
                handleEdit={okTodohandler}
              />
            );
          }
        })}
      </div>
      <h2>다했다.. ⭐</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isdone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                handleDelete={deleteTodohandler}
                handleEdit={okTodohandler}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default List;
