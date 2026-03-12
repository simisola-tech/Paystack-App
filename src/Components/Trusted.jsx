import "./Trusted.css";

const Trusted = () => {
  const cardsArr = [
    {
      id: 1,
      image:
        "https://assets.paystack.com/assets/img/content/For-International-Businesses_180823_165939.svg",
      price: "Paystack for Global Brands",
      discrip: "We help global brands accept payments from across Africa",
      highlight: "Learn more",
    },
    {
      id: 2,
      image:
        "https://assets.paystack.com/assets/img/content/For-Entrepreneurs_180823_165709.svg",
      price: "Paystack for Entrepreneurs",
      discrip:
        "From startup to scale-up, we can support you at every stage of your businesses’ growth",
      highlight: "Learn more",
    },
    {
      id: 3,
      image:
        "https://assets.paystack.com/assets/img/content/For-Large-Corporations_180823_165502.svg",
      price: "Paystack for Large Organizations",
      discrip:
        "Paystack helps many of the largest corporate and government organizations in Nigeria get paid quickly and securely.",
      highlight: "Learn more",
    },
  ];
  return (
    <div className="TrustedContainer">
      <div className="top">
        <h1>Trusted by 200,000+ businesses</h1>
        <p>
          Thousands of organizations of all sizes trust Paystack to grow their
          business.
        </p>
      </div>
      <div className="cardholder">
        {cardsArr?.map((item) => (
          <div className="cards" key={item?.id}>
            <img src={item?.image} alt="" />
            <h2>{item?.price}</h2>
            <p>{item?.discrip}</p>
            <span>{item?.highlight}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trusted;