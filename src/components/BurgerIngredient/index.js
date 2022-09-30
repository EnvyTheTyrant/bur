import React from "react";
import css from "./style.module.css";

const BurgerIngredient = (props) => {
  if (props.type === "BunTop")
    return (
      <div className={css.BunTop}>
        <div className={css.Seed}></div>
        <div className={`${css.Seed} ${css.Second}`}></div>
        <div className={`${css.Seed} ${css.Third}`}></div>
        <div className={`${css.Seed} ${css.Fourth}`}></div>
      </div>
    );
  if (props.type === "Lettuce")
    return (
      <div className={css.Lettuce}>
        <button onClick={() => props.choose("Lettuce")}>x</button>
      </div>
    );
  if (props.type === "Tomato")
    return (
      <div className={css.Tomato}>
        <button onClick={() => props.choose("Tomato")}>x</button>
      </div>
    );
  if (props.type === "Patty")
    return (
      <div className={css.Patty}>
        <button onClick={() => props.choose("Patty")}>x</button>
      </div>
    );
  if (props.type === "Cheese")
    return (
      <div className={css.Cheese}>
        <button onClick={() => props.choose("Cheese")}>x</button>
      </div>
    );
  if (props.type === "BunBottom") return <div className={css.BunBottom}></div>;
  return <div>...</div>;
};

export default BurgerIngredient;
