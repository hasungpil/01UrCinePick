import React from "react";
import "./Header.scss";
import Logo from "../components/Common/Logo";
import Gnb from "../components/Header/Gnb";
import Utillity from "../components/Header/Utillity";
import Button from "../components/Common/Button";

const Header = () => {
  return (
    <>
      <header className="header">
        <Logo />
        <Button className="btn-menu" ariaLabel="메뉴" />
        <Gnb />
        <Utillity />
      </header>
    </>
  );
};

export default Header;
