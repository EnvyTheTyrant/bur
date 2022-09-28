import React from "react";
import css from "./style.module.css";

const Order = (props) => {
  return (
    <div className={css.Order}>
      <p>
        Address : {props.order.address.firstname} | {props.order.address.city} |{" "}
        {props.order.address.strees} <br />
        Ingredients: Patty : {props.order.ingredients.Patty}, Lettuce :{" "}
        {props.order.ingredients.Lettuce}, Cheese :{" "}
        {props.order.ingredients.Cheese}, Tomato :{" "}
        {props.order.ingredients.Tomato}
      </p>
      <p>
        Price : <strong>{props.order.price}₮</strong>
      </p>
    </div>
  );
};

export default Order;
