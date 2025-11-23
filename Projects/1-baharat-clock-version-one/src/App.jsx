import ClockHeading from "./components/Clock-heading";
import ClockSlogan from "./components/Clock-slogan";
import ClockTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <ClockTime />
    </center>
  );
}
export default App;
