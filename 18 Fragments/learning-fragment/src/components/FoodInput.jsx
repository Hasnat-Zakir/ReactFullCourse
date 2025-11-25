import styles from "./FoodInput.module.css";
function FoodInput({ handleOnChange }) {
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
