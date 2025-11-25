import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/foodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/container";
import "./App.css";
function App() {
  let foodItems = ["Sabxi", "Vegtable", "Rice", "Biryani", "Chicken", "Ghee"];
  return (
    <Container>
      <h1 className="heading">Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems} />
    </Container>
  );
}
export default App;
