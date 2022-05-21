import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // function
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newIncompleteTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newIncompleteTodos);
    setTodoText("");
  };
  // useState
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["TODO１", "TODO2"]);
  const [completeTodos, setCompleteTodos] = useState(["TODO3", "TODO4"]);

  return (
    <>
      {/* <p>TODO App </p> */}
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>ADD</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了リスト</p>
        {incompleteTodos.map((todo) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button>DONE</button>
              <button>DEL</button>
            </div>
          );
        })}
      </div>
      <div className="complete-area">
        <p className="title">完了リスト</p>
        {completeTodos.map((todo) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button>BACK</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
