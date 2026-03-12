import "./Simple.css";

const Simple = ({
  title = "Simple, easy payments",
  subtitle = "Building a business is hard. Getting paid shouldn't be.",
  image = "https://assets.paystack.com/assets/img/content/Collect-Payments-for-Multiple-Channels-1.1.gif",
  rightTitle = "Delight customers with a seamless payments experience",
  rightText = "Give your customers the gift of modern, frictionless, painless payments. Integrate Paystack once and let your customers pay you however they want.",
  icons = [
    ["Card", "Bank Account", "Bank Transfer", "USSD"],
    ["Apple Pay", "Visa QR", "Mobile Money", "POS"],
  ],
  secondTitle = "Enjoy phenomenal transaction success rates",
  secondText = "We automatically route payments through the most optimal channels, ensuring the highest transaction success rates in the market.",
  linkText = "Find out how we achieve high success rates",
}) => {
  return (
    <div className="simplecontainer">
      <div className="simplepayment">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="imageTextHolder">
        <div className="simpleleft">
          <img src={image} alt="" />
        </div>
        <div className="simpleright">
          <h1>{rightTitle}</h1>
          <p>{rightText}</p>
          <div className="icon-holder">
            {icons.map((group, index) => (
              <div key={index} className="icons">
                {group.map((item, id) => (
                  <p key={id}>{item}</p>
                ))}
              </div>
            ))}
          </div>
          <h1>{secondTitle}</h1>
          <p>{secondText}</p>

          <span>{linkText}</span>
        </div>
      </div>
    </div>
  );
};

export default Simple;