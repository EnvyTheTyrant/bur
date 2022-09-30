import React from "react";
import css from "./style.module.css";
import logoimage from "../../assets/images/Logo.png";

const Logo = () => (
  <div className={css.Logo}>
    <img src={logoimage} alt="" />
  </div>
);

export default Logo;
