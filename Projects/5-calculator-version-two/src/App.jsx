import Display from "./Display";
import ButtonContianer from "./ButtonContainer";
import "./App.css";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");
  const onButtonClicked = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal}></Display>
      <ButtonContianer onButtonClicked={onButtonClicked}></ButtonContianer>
    </div>
  );
}

export default App;
