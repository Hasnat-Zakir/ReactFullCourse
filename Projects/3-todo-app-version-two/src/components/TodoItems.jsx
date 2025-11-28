import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";
function TodoItems({ TodoItems }) {
  return (
    <>
      <div className={style.itemsContainer}>
        {TodoItems.map((item) => (
          <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
        ))}
      </div>
    </>
  );
}
export default TodoItems;
