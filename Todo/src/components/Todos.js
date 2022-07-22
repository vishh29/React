import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "51.4vh",
  };
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className=" my-3">TODOs List</h3>
      {props.todos.length === 0 ? (
        <h3>No Todos to display</h3>
      ) : (
        props.todos.map((todo) => {
          return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          );
        })
      )}
    </div>
  );
};
