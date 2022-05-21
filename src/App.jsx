import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // useState
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["TODO１", "TODO2"]);
  const [completeTodos, setCompleteTodos] = useState(["TODO3", "TODO4"]);

  return (
    <>
      {/* <p>TODO App </p> */}
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>ADD</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了リスト</p>
        {incompleteTodos.map((todo) => {
          return (
            <div className="list-row">
              <li>{todo}</li>
              <button>完了</button>
              <button>削除</button>
            </div>
          );
        })}
      </div>
      <div className="complete-area">
        <p className="title">完了リスト</p>
        {completeTodos.map((todo) => {
          return (
            <div className="list-row">
              <li>{todo}</li>
              <button>戻す</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
