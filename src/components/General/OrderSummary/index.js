import React from "react";
import Button from "../Button";

const OrderSummary = (props) => {
  return (
    <div>
      <h3>Your order</h3>
      <p>Your ingredient choice: </p>
      <ul>
        {Object.keys(props.ingredients).map((el) => (
          <li key={el}>{`${props.controls[el]}: ${props.ingredients[el]}`}</li>
        ))}
      </ul>
      <div>Total price : {props.totalPrice}</div>
      <p>Continue?</p>
      <Button clicked={props.onCancel} text="Refuse" type="Danger" />
      <Button clicked={props.onContinue} text="Continue" type="Success" />
    </div>
  );
};

export default OrderSummary;
