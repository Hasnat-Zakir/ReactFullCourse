import AppName from "./components/App-name";
import AppTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./style.css";
import { useState } from "react";
import WellComeMessage from "./components/WellcomeMessage";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((curValue) => [
      ...curValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };
  const handleDeleteButton = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AppTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WellComeMessage />}
      <TodoItems
        onDeleteClicked={handleDeleteButton}
        TodoItems={todoItems}
      ></TodoItems>
    </center>
  );
}

export default App;
