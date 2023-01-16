import React from "react";
import classes from "./Footer.module.css";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className={classes.wrapper}>
      <div className={classes.container}>
        <div>
          <h4>Техническая поддержка</h4>
          <p>
            Мы с удовольствием ответим на интересующие тебя вопросы
            serg538691@mail.com
          </p>
        </div>
        <div>
          <h4>Помощь</h4>
          <p>Информация</p>
          <p>Вопросы и ответы</p>
          <img src={logo} alt="logo" className={classes.logo} /> © 2023
        </div>
      </div>
    </footer>
  );
};

export default Footer;
