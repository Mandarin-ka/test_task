import React from "react";
import logo from "./../../assets/icons/logo.svg";
import HeaderCounter from "./HeaderCounter/HeaderCounter";
import cl from "./Header.module.css";
import { useCounter } from "../../hooks/useCount";

function Header({ count }: { count: number }) {
  return (
    <header id={cl.header}>
      <div className={cl.logo}>
        <img src={logo} alt="" className={cl.logo__img} />
        <h1 className={cl.logo__name}>FLOWERS SHOP</h1>
      </div>
      <HeaderCounter count={useCounter()} />
    </header>
  );
}

export default Header;
