import css from "./style.module.css";
import React from "react";
import BuildControl from "../BuildControl";

const BuildControls = (props) => {
  return (
    <div className={css.BuildControls}>
      <p>
        Total price: <strong>{props.price}</strong>
      </p>
      {Object.keys(props.controls).map((el) => (
        <BuildControl
          key={el}
          disabled={props.disabled}
          addIngredient={props.addIngredient}
          removeIngredient={props.removeIngredient}
          type={el}
          ingredient={props.controls[el]}
        />
      ))}
      <button
        onClick={props.showConfirmModal}
        disabled={props.orderButtonDisabled}
        className={css.OrderButton}
      >
        Order
      </button>
    </div>
  );
};

export default BuildControls;
