import React from "react";
import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css";
import { withRouter } from "react-router-dom";
const Burger = (props) => {
  let content = [];
  const items = Object.entries(props.ingredients);

  items.forEach((el) => {
    for (let i = 0; i < el[1]; i++) {
      content.push(
        <BurgerIngredient
          choose={props.choose}
          key={`${el[0]}${i + 1}`}
          type={el[0]}
        />
      );
    }
  });

  if (content.length === 0) content = <p>Choose your things...</p>;
  return (
    <div className={css.Burger}>
      <BurgerIngredient key="BunTop1" type="BunTop" />
      {content}
      <BurgerIngredient key="BunBottom1" type="BunBottom" />
    </div>
  );
};

export default withRouter(Burger);
