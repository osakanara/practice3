import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <>
      <div className="complete-area">
        <p className="title">完了リスト</p>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>BACK</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
