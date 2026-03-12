import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Simple from "./Components/Simple";
import Customer from "./Components/Customer";
import Protection from "./Components/Protection";
import Trusted from "./Components/Trusted";
import Powering from "./Components/Powering";
import Backed from "./Components/Backed";
import Starts from "./Components/Starts";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Simple />
      <Customer
        title="Build custom payments experiences with well-documented APIs"
        description="Developers love our thorough, well-documented APIs..."
        listItems={[
          "Collect one-time and recurring payments from your app or website.",
          "Make instant transfers",
          "Retrieve all your transaction and customer data",
          "Verify the identity of customers",
        ]}
        linkText="Paystack API Quickstart"
        image="https://assets.paystack.com/assets/img/content/_400x357_crop_center-center_82_line/Robust-Suite-of-APIs-Opt.png"
      />

      <Protection
        videoSrc="https://assets.paystack.com/assets/video/content/Advanced-Fraud-Protection.mp4"
        title1="Protect yourself and your customers with advanced fraud detection"
        description1="Paystack's combination of automated and manual fraud systems protect you from fraudulent transactions and associated chargeback claims."
        title2="Detailed reporting for accounting, reconciliation, and audits"
        description2="Understand your customers' purchase patterns and do easy reconciliations with a robust data Dashboard and easy exports."
      />
      <Trusted />
      <Powering />
      <Backed />
      <Starts
        Paystack="Try Paystack Now"
        payments="Start accepting payments in just 30 minutes"
      />
      <Footer />
    </>
  );
}

export default App;