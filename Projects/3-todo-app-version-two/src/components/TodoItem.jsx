import styles from "./TodoItem.module.css";
function TodoItem({ todoName, todoDate }) {
  return (
    <div className="container">
      <div class="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" classNames={styles.btnSucess}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
