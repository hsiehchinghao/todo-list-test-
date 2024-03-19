import React, { useRef } from "react";
import { useTodo } from "../TaskContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddText = () => {
  const { addTodo } = useTodo();
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let ans = inputRef.current.value;
    if (ans != "") {
      addTodo(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <form action="" className="add-todo-form">
      <label htmlFor="add-todo-form__input">Add to list</label>
      <div className="add-todo-form__input">
        <input
          id="add-todo-form__input"
          type="text"
          ref={inputRef}
          placeholder="type it..."
        />
        <button className="add-todo-form__btn" onClick={handleSubmit}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </form>
  );
};

export default AddText;
