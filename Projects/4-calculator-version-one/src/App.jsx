import Display from "./Display";
import ButtonContianer from "./ButtonContainer";
import "./App.css";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonContianer></ButtonContianer>
    </div>
  );
}

export default App;
