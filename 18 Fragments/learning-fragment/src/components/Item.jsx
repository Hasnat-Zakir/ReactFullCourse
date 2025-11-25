import styles from "./item.module.css";
let Item = ({ foodItem, handleBuyButton }) => {
  return (
    <>
      <li className={`${styles.kgItem} list-group`}>
        <span className={`${styles.kgSpan} list-group-item`}>
          {" "}
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
