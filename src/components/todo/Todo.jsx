import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Todo(props) {
  const navigate = useNavigate();
  return (
    <div className="todo-box">
      <div
        onClick={() => {
          navigate(`/detail/${props.todo.id}`);
        }}
      >
        상세보기
      </div>
      <div>
        <h2>{props.todo.title}</h2>
        <div>{props.todo.content}</div>
      </div>
      <div className="button-container">
        <button
          className="todo-delete-button"
          onClick={() => props.handleDelete(props.todo.id)}
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button"
          onClick={() => props.handleEdit(props.todo.id)}
        >
          {props.todo.isdone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}
export default Todo;
