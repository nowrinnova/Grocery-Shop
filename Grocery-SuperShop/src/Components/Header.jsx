import React from "react";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header-top">
          <a className="userLogin" href="">Login</a>
          <span className="sep">|</span>
          <a className="userLogin" href="">Register</a>
          <span className="sep">|</span>
          <a className="userLogin" href="">Help</a>
          <span className="sep">|</span>
          <a className="userLogin" href="">Feadback</a>
        </div>
        <div className="header">
          <div className="header-headerSection1" >
            <div className="header-more-wrapper"></div>
            <div className="logo"></div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Header;
