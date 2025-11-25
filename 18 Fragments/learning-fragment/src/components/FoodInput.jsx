import styles from "./FoodInput.module.css";
function FoodInput() {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.FoodInput}
      onChange={handleOnChange}
    />
  );
}
export default FoodInput;
