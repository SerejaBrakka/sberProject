import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "../../assets/logo.png";
import basket from "../../assets/basket.svg";
const Header = () => {
  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        <Link to="/">
          <img src={logo} alt="logo" className={classes.logo} />
        </Link>
        <Link to="/products">Продукты</Link>
        <Link to="signup">Регистрация</Link>
        <Link to="signin">Авторизация</Link>
        <Link to="select">Избраное</Link>
        <Link to="basket">
          <img src={basket} alt="basket" className={classes.basket} />
        </Link>
      </ul>
    </div>
  );
};

export default Header;
