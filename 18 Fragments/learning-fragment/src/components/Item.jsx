import styles from "./item.module.css";
let Item = ({ foodItem }) => {
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${foodItem} being Bought`);
  };
  return (
    <>
      <li className={`${styles.kgItem} list-group`}>
        <span className={`${styles.kgSpan} list-group-item`}>
          {" "}
          {foodItem}
          <button
            className={`${styles.button} btn btn-info`}
            onClick={(event) => handleBuyButtonClicked(event)}
          >
            Buy
          </button>
        </span>
      </li>
    </>
  );
};
export default Item;
