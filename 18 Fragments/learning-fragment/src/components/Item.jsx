import styles from "./item.module.css";

let Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <>
      <li
        className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}
      >
        <span className={`${styles.kgSpan}`}>
          {foodItem}
          <button
            className={`${styles.button} btn btn-info`}
            onClick={handleBuyButton}
          >
            Buy
          </button>
        </span>
      </li>
    </>
  );
};
export default Item;
