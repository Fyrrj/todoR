import React from "react";
import logo from "../imgs/robin-hood.png";
import bownav from "../imgs/bow.png";

export default function Header() {
  return (
    <header>
      <div className="header-content-box">
        <div className="logotype-box">
          <img src={logo} className="site-main-logo" alt="site-logo"></img>
          <h1>todoR</h1>
          <h2>A real hero in the forest of tasks</h2>
          <img src={bownav} className="bownav" alt="navigation" />
        </div>
      </div>
    </header>
  );
}
