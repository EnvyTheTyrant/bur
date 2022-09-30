import React from "react";
import { Link, NavLink } from "react-router-dom";
import css from "./style.module.css";

const MenuItem = (props) => (
  <li className={css.MenuItem}>
    <NavLink activeClassName={css.active} exact={props.exact} to={props.link}>
      {props.children}
    </NavLink>
  </li>
);

export default MenuItem;
