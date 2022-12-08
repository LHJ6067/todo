import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Detail = () => {
  const navigate = useNavigate();
  const todos = useSelector((state) => state.modules.todos);
  const param = useParams().id;

  return (
    <React.Fragment>
      {todos.map((todo) => {
        if (todo.id === param) {
          return (
            <STcontainer key={todo.id}>
              <div>ID:{todo.id}</div>
              <div>제목:{todo.title} </div>
              <div>내용:{todo.content} </div>
              <button
                onClick={() => {
                  navigate("/");
                }}
              >
                이전으로
              </button>
            </STcontainer>
          );
        }
      })}
    </React.Fragment>
  );
};

export default Detail;
const STcontainer = styled.div`
  width: 400px;
  height: 300px;
  color: #454545;
  border: 1px solid rgb(59, 182, 114);
  border-radius: 10px;
  button {
    border: green;
    padding: 5px;
    border-radius: 5px;
    background-color: rgb(134, 211, 99);
    color: white;
    cursor: pointer;
  }
  margin: auto;
  margin-top: 200px;
  font-size: large;
`;
