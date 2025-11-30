import { useContext } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";

function TodoItems() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      <div className={style.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoDate={item.dueDate}
            todoName={item.name}
          ></TodoItem>
        ))}
      </div>
    </>
  );
}
export default TodoItems;
