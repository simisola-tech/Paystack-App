import "./Starts.css";
import Button from "./Button";

const Starts = (props) => {
  return (
    <div className="startContainer">
      <div className="leftstart">
        <p>T{props.Paystack}</p>
        <h1>{props.payments}</h1>
      </div>
      <div className="rightstart">
        <Button text="Create a free account" className="startBtn" />
      </div>
    </div>
  );
};

export default Starts;