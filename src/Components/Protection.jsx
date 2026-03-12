import "./Protection.css";

const Protection = (props) => {
  return (
    <div className="protectionContainer">
      <div className="protectionleft">
        <video src={props.videoSrc}></video>
      </div>
      <div className="protectionright">
        <h1>{props.title1}</h1>
        <p>{props.description1}</p>

        <h1>{props.title2}</h1>
        <p>{props.description2}</p>
      </div>
    </div>
  );
};

export default Protection;