import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoadd } from "../../redux/modules/module";
import uuid from "react-uuid";

import "./style.css";
function Input() {
  const todos = useSelector((state) => state.modules.todos);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    console.log(todos);
    if ((content !== "", title !== "")) {
      const newTodo = {
        id: uuid(),
        title: title,
        content: content,
        isdone: false,
      };
      dispatch(todoadd(newTodo));
      setTitle("");
      setContent("");
    } else {
      alert("빈칸을모두입력해주세요");
    }
  };

  return (
    <div className="input-container">
      <div className="input-box">
        <span>제목</span>
        <input
          type="text"
          className="input-text"
          value={title}
          name="inputtitle"
          onChange={(e) => setTitle(e.target.value)}
        />
        <span>내용</span>
        <input
          type="text"
          className="input-text"
          value={content}
          name="inputcontent"
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="add-input-button" onClick={addTodoHandler}>
          추가하기
        </button>
      </div>
    </div>
  );
}

export default Input;
