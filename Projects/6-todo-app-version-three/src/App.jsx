import AppName from "./components/App-name";
import AppTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WellComeMessage from "./components/WellcomeMessage";
import "./style.css";
import TodoItemsContextProvider from "./components/store/todo-items-store.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AppTodo />
        <WellComeMessage></WellComeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
