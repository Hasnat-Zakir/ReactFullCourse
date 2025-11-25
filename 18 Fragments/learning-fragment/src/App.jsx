import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/foodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/container";
import FoodInput from "./components/FoodInput";
import "./App.css";
function App() {
  let foodItems = ["Sabxi", "Vegtable", "Rice", "Biryani", "Chicken", "Ghee"];

  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <Container>
        <h1 className="heading">Healthy Food</h1>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems} />
      </Container>

      {/* <Container>
        <p>
          The above food list is good and healthy for everyones health and its
          best dieight, all need to follow these routine for better and good
          health
        </p>
      </Container> */}
    </>
  );
}
export default App;
