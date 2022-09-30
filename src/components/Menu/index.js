import React from "react";
import MenuItem from "../MenuItem";
import css from "./style.module.css";

const Menu = () => (
  <div>
    <ul className={css.Menu}>
      <MenuItem exact link="/">
        Burger
      </MenuItem>
      <MenuItem link="/orders">Order</MenuItem>
    </ul>
  </div>
);

export default Menu;
