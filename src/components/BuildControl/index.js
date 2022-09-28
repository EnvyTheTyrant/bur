import css from "./style.module.css";
import React from "react";

const BuildControl = (props) => (
  <div className={css.BuildControl}>
    <div className={css.Label}>{props.ingredient}</div>
    <button
      disabled={props.disabled[props.type]}
      onClick={() => props.removeIngredient(props.type)}
      className={css.Less}
    >
      Remove
    </button>
    <button
      onClick={() => props.addIngredient(props.type)}
      className={css.More}
    >
      Add
    </button>
  </div>
);

export default BuildControl;
