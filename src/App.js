import React, { useReducer, useState } from "react";
import "./App.css";
function App() {
  return (
    <div className="layout">
      <Header />
      <Form />
    </div>
  );
}

function Header() {
  return (
    <div className="head-container">
      <div>My Todo List</div>
      <div>React</div>
    </div>
  );
}

function Form() {
  const [todos, setTodos] = useState([
    { id: 1, title: "밥먹기", content: "세끼먹기", isdone: false },
    { id: 2, title: "잠자기", content: "푹자기", isdone: true },
    { id: 3, title: "고양이밥주기", content: "참치캔으로", isdone: false },
  ]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodoHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      content: content,
      isdone: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setContent("");
  };

  const deleteTodoHandler = (id) => {
    const newTodoList = todos.filter((todos) => todos.id !== id);
    setTodos(newTodoList);
  };
  const editTodoHandler = (id) => {
    const newTodos = todos.map((todos) => {
      if (todos.id === id) {
        return {
          ...todos,
          isdone: !todos.isdone,
        };
      } else {
        return { ...todos };
      }
    });

    setTodos(newTodos);
  };
  return (
    <div>
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
          <span>제목</span>
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
      <div className="list-container">
        <h2>Working.. 🔥</h2>
        <div className="list-wrapper">
          {todos.map((todo) => {
            if (!todo.isdone) {
              return (
                <Todo
                  todo={todo}
                  key={todo.id}
                  handleDelete={deleteTodoHandler}
                  handleEdit={editTodoHandler}
                />
              );
            }
          })}
        </div>
        <h2>Done.. 🔥</h2>
        <div className="list-wrapper">
          {todos.map((todo) => {
            if (todo.isdone) {
              return (
                <Todo
                  todo={todo}
                  key={todo.id}
                  handleDelete={deleteTodoHandler}
                  handleEdit={editTodoHandler}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

function Todo(props) {
  return (
    <div className="todo-box">
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

export default App;
