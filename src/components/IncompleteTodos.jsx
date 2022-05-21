import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickDone, onClickDelete } = props;
  return (
    <>
      <div className="incomplete-area">
        <p className="title">未完了リスト</p>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickDone(index)}>DONE</button>
              <button onClick={() => onClickDelete(index)}>DEL</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
