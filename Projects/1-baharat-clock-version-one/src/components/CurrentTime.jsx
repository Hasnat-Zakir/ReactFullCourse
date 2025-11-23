let ClockTime = () => {
  let time = new Date();
  return (
    <p>
      The current Time in Pakistan is:{time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};
export default ClockTime;
