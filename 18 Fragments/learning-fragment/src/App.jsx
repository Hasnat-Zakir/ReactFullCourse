import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/foodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/container";
import FoodInput from "./components/FoodInput";
import "./App.css";
import { useState } from "react";
function App() {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
    console.log(event.target.value);
    // setTextState(event.target.value);
  };
  return (
    <>
      <Container>
        <h1 className="heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <FoodItems items={foodItems} />
        <ErrorMessage items={foodItems}></ErrorMessage>
      </Container>
    </>
  );
}
export default App;
