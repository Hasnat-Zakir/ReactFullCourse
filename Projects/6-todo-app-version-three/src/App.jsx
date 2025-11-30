import AppName from "./components/App-name";
import AppTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./style.css";
import { useState } from "react";
import WellComeMessage from "./components/WellcomeMessage";
import { TodoItemsContext } from "./components/store/todo-items-store";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((curValue) => [
      ...curValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };
  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AppTodo />
        <WellComeMessage></WellComeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
