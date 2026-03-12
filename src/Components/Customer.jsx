import "./Customer.css";

const Customer = (props) => {
  return (
    <div className="CustomerContainer">
      <div className="customerright">
        <h1>{props.title}</h1>
        <p>{props.description}</p>

        <ul>
          {props.listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <span>{props.linkText}</span>
      </div>

      <div className="customerleft">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};

export default Customer;