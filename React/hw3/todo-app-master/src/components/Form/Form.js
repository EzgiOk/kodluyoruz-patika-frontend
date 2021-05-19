import React from "react";
import "./Form.css";
import ToDoHeader from "../ToDoHeader/ToDoHeader"

const Form = ({ userInput, onInputChange, addItem }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
  <React.Fragment>
    <ToDoHeader />
    <form className="input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={onInputChange}
        className="form-control"
      />
      <button onClick={addItem} className="btn btn-primary">
        Ekle
      </button>
    </form>
  </React.Fragment>
  );
};

export default Form;
