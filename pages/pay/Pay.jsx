import React, { useEffect, useState } from "react";
import "./Pay.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../src/utils/newRequest";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../src/components/CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51MnvZZGLjQHPk5STKR3D5o7pzDxlGRohmM90iCVP2VZNfGGOFmcv9jzKzFB327SpkMDNlLp6sq8tfUhRWH9A4ASZ000d1yU30A"
);

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(
          `/orders/create-payment-intent/${id}`
        );
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="pay">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Pay;
