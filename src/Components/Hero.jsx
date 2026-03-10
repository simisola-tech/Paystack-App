import "./Hero.css";
import Button from "./Button";
import Background from "../assets/firstbackground.svg";
// import TrustedSection from "./TrustedSection";

const Hero = ({
  title = "Modern online and offline payments for Africa",
  description = "Paystack helps businesses in Africa get paid by anyone, anywhere in the world",
  Trusted = "Trusted by over 200,000 businesses",
  Watch = "Watch MTN Chief Transformation Officer, Olubayo  Adekanmbi, discuss working with Paystack",
  dominos = "https://assets.paystack.com/assets/img/logos/merchants/Dominos-Plain.svg",
  mtn = "https://assets.paystack.com/assets/img/logos/merchants/mtn-group-grayscale.svg",
  bolt = "https://assets.paystack.com/assets/img/logos/merchants/Bolt-Stack-Blue_200304_153027.svg",
  mansard = "https://assets.paystack.com/assets/img/logos/merchants/Axa-mansard-_-Plain.svg",
}) => {
  return (
    <>
      <main>
        <article className="leftholder">
          <div className="top">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="btn-holder">
              <Button
                text="Create a free Account"
                style={{
                  width: "200px",
                  height: "50px",
                  backgroundColor: "#3BB75E",
                  borderRadius: "5px",
                  border: "none",
                  color: "#FFFFFF",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              />
              <Button
                text="or Contact sales"
                style={{
                  width: "200px",
                  height: "50px",
                  backgroundColor: "transparent",
                  borderRadius: "5px",
                  border: "none",
                  color: "#3BB75E",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              />
            </div>
          </div>
          <div className="bottom">
            <p>{Trusted}</p>
            <div className="img-holder">
              <img src={dominos} alt="" />
              <img src={mtn} alt="" />
              <img src={bolt} alt="" />
              <img src={mansard} alt="" />
            </div>
          </div>
        </article>
        <section className="rightholder">
          <img src={Background} alt="" />
          <h4>{Watch}</h4>
        </section>
      </main>
      {/* <TrustedSection /> */}
    </>
  );
};

export default Hero;