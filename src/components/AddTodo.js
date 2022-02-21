import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title and Desc can not be blank!");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="container my-3">
      <h3>Add a TODO</h3>
      <form onSubmit={submit}>
        <div className="form-group my-3">
          <label htmlFor="title">Todo Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Enter TODO"
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="desc">Todo Description</label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            placeholder="Enter Desc"
          />
        </div>
        <button type="submit" className="btn btn-md btn-success my-3">
          Add TODO
        </button>
      </form>
    </div>
  );
};
