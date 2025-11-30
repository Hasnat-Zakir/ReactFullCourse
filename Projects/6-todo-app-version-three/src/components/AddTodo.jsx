import { useRef, useState } from "react";
import styles from "./AddTodo.module.css";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="Date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className={`btn btn-success ${styles.addButton} `}
            onClick={handleAddButtonClicked}
          >
            <IoMdAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
