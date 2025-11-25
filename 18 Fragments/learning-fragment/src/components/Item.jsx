import styles from "./Item.module.css";
let Item = ({ foodItem }) => {
  return (
    <>
      <li className={"list-group-item kg-Item"}>
        {" "}
        <span> {foodItem} </span>
      </li>
    </>
  );
};
export default Item;
