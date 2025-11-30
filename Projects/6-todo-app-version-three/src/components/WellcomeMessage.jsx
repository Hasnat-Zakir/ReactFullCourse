import { useContext } from "react";
import styles from "./wellcomeMessage.module.css";
import { TodoItemsContext } from "./store/todo-items-store";
const WellComeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && <p className={styles.wellCome}>Enjoy your Day</p>
  );
};
export default WellComeMessage;
