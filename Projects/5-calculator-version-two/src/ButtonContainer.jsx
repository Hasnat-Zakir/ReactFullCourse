import styles from "./ButtonContainer.module.css";
let ButtonContianer = ({ onButtonClicked }) => {
  let ButtonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {ButtonName.map((ButtonName) => (
        <button
          className={styles.button}
          onClick={() => onButtonClicked(ButtonName)}
        >
          {ButtonName}
        </button>
      ))}
    </div>
  );
};
export default ButtonContianer;
