import { useContext } from "react";
import styles from "./TodoItem.module.css";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "./store/todo-items-store";

function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            className={` btn btn-danger ${styles.btnSuccess} ${styles.btn}`}
            onClick={() => deleteItem(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
