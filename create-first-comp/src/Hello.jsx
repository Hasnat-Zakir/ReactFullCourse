function Hello() {
  let myName = "Hasnat";
  let number = 3342;
  let fullName = () => {
    return "Hasnat Zakir";
  };
  return (
    <p>
      MessageNo: {number} Hello this is future Speaking... and I am {fullName()}
    </p>
  );
}
export default Hello;
