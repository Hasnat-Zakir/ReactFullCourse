import styles from "./Item.module.css";
let Item = ({ foodItem }) => {
  return (
    <>
      <li className={`${styles["kg-Item"]} "list-group-item kg-Item"`}>
        {" "}
        <span className={styles["kg-span"]}> {foodItem} </span>
      </li>
    </>
  );
};
export default Item;
z;
