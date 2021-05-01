import React from "react";
import Steppers from "../../Components/Stepper";
import { Card } from "@material-ui/core";
import "./styleSelectPaymentPage.css";
import { useState } from "react";
import { useHistory } from "react-router";

export default function SelectPaymentPage() {
  const [payment, setPayment] = useState("");
  const history = useHistory();
  return (
    <>
      <div className="order_top">
        <Steppers activeStep={1} />
      </div>
      <Card className="order_card">
        <h3>Select Your Favorite Payment </h3>
        <div className="flex_center">
          <img
            onClick={() => setPayment("Fawry")}
            src="/assets/fawry.jpeg"
            className={payment === "Fawry" ? "fawry_plus" : "fawry"}
            alt="pay by Fawry"
          />
          <img
            onClick={() => setPayment("payPal")}
            className={payment === "payPal" ? "paypal_plus" : "paypal"}
            src="/assets/paypal2.png"
            alt="pay by paypal"
          />
        </div>
        <div className="flex_center" style={{ marginTop: 50 }}>
          <button
            disabled={payment === ""}
            onClick={() => {
              history.push(`/placeOrder/${payment}`);
            }}
            className="btn_secondary"
          >
            Processed
          </button>
        </div>
      </Card>
    </>
  );
}
