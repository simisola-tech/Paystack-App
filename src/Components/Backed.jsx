import "./Backed.css";

const Backed = () => {
  const backCard = [
    {
      id: 1,
      image:
        "https://assets.paystack.com/assets/img/logos/merchants/_300x124_crop_center-center_60_line/Stripe.png 300w",

      discrip:
        "Paystack is highly technical and fanatically customer oriented. We’re excited to back such people in one of the world’s fastest-growing regions.",
      highlight: "Learn more",
      profile:
        "https://assets.paystack.com/ assets/img/testimonial-authors/_400x400_crop_center-center_82_line/patrick-collison-headshot.jpg",
      name: "Patrick Collison CEO, Stripe",
    },
    {
      id: 2,
      image:
        "https://assets.paystack.com/assets/img/logos/merchants/_400x127_crop_center-center_82_line/Visa-_-Color.png 400w, https://assets.paystack.com/assets/img/logos/merchants/_800x255_crop_center-center_82_line/Visa-_-Color.png 800w, https://assets.paystack.com/assets/img/logos/merchants/_300x95_crop_center-center_60_line/Visa-_-Color.png 300w, https://assets.paystack.com/assets/img/logos/merchants/_600x191_crop_center-center_60_line/Visa-_-Color.png 600w, https://assets.paystack.com/assets/img/logos/merchants/_768x245_crop_center-center_60_line/Visa-_-Color.png 768w, https://assets.paystack.com/assets/img/logos/merchants/_1536x491_crop_center-center_60_line/Visa-_-Color.png 1536w",
      discrip:
        "Our investment in Paystack aligns with the kind of investments we look for - those that will help extend our reach into the global commerce ecosystem",
      profile:
        "https://assets.paystack.com/ assets/img/testimonial-authors/_200x200_crop_center-center_line/otto-williams.jpeg",

      name: "Otto Williams",
    },
    {
      id: 3,
      image:
        "https://assets.paystack.com/assets/img/logos/merchants/_257x257_crop_center-center_line/ycombinator-logo.png 257w",
      discrip:
        "As YC's first Nigerian startup Paystack leads the charge of great companies coming out of Africa, powering modern payments for an entire continent.",
      profile:
        "https://assets.paystack.com/ assets/img/testimonial-authors/_400x400_crop_center-center_82_line/michael-siebel-headshot.jpeg",
      name: "Michael Seibel CEO, Partner, Y Combinator",
    },
  ];
  return (
    <div className="BackedContainer">
      <div className="backedtop">
        <h1>Backed by strong global partners</h1>
        <p>
          Paystack is backed by notable investors as well as some of the best
          payments companies on the planet.
        </p>
      </div>

      <div className="backedbottom">
        {backCard?.map((item) => (
          <div className="cards" key={item?.id}>
            <img src={item?.image} alt="" />
            <p>{item?.discrip}</p>
            <div className="profileholder">
              <img src={item?.profile} alt="" />
              <p>{item?.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Backed;