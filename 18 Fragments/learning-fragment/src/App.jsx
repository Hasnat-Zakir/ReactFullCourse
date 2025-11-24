import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./assets/components/foodItems";
import ErrorMessage from "./assets/components/ErrorMessage";
import "./App.css";
function App() {
  let foodItems = ["Sabxi", "Vegtable", "Rice", "Biryani", "Chicken", "Ghee"];
  return (
    <>
      <h1 className="heading">Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems} />
    </>
  );
}
export default App;
