import styles from "./ButtonContainer.module.css";
let ButtonContianer = () => {
  let ButtonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
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
        <button className={styles.button}>{ButtonName}</button>
      ))}
    </div>
  );
};
export default ButtonContianer;
