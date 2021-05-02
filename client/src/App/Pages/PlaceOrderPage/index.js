import React from "react";
import { useParams } from "react-router";
import Fawry from "../../Components/Fawry";
import PayPal from "../../Components/PayPal";
import Steppers from "../../Components/Stepper";

export default function PlaceOrderPage() {
  const { keyword } = useParams();
  return (
    <div style={{ marginTop: 100 }}>
      <div className="order_top">
        <Steppers activeStep={2} />
      </div>
      {keyword === "payPal" ? <PayPal /> : <Fawry />}
    </div>
  );
}
