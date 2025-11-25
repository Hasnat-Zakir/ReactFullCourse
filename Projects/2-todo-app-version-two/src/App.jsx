import AppName from "./components/App-name";
import AppTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./style.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let todoItem = [
    {
      name: "Go to College",
      dueDate: "22/23/025",
    },
    {
      name: "Buy Milk",
      dueDate: "22/23/025",
    },
    {
      name: "Like this Video",
      dueDate: "right now",
    },
  ];

  return (
    <center class="todo-container">
      <AppName />
      <AppTodo />
      <TodoItems TodoItems={todoItem}></TodoItems>
    </center>
  );
}

export default App;
