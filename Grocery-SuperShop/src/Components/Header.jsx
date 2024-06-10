import React from "react";
import { IoMenu } from "react-icons/io5";
import { FaGreaterThan } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
function Header() {
  return (
    <>
      <div className="header">
        <div className="header-top">
          <a className="userLogin" href="">
            Login
          </a>
          <span className="sep">|</span>
          <a className="userLogin" href="">
            Register
          </a>
          <span className="sep">|</span>
          <a className="userLogin" href="">
            Help
          </a>
          <span className="sep">|</span>
          <a className="userLogin" href="">
            Feadback
          </a>
        </div>
        <div className="header-2">
          <div className="header-headerSection1">
            <div className="header-more-wrapper">
              <IoMenu />
            </div>
            <div className="logo">
              <a href="">
                <img src="images/logo.webp" alt="" />
              </a>
            </div>
          </div>
          <div className="header-headerSection2">
            {/* <div className="location-wrapper">
              <div className="location-wrapper-house">
                <AiFillHome />
              </div>
              <div className="location-wrapper-greater">
                <FaGreaterThan />
              </div>
            </div> */}
            <div className="header-headerSection2-search">
              <div className="header2-search-button">
                <input
                  className="header2-searchBar"
                  type="text"
                  placeholder="Search"
                />
              </div>
              <div className="search-button">
                <button className="search">
                  <IoSearch />
                </button>
              </div>
            </div>
          </div>
          <div className="header-headerSection3">
            <div className="cartDetails">
              <span className="cart_icon">
              <FaShoppingCart />
              </span>
              <span className="bag-item-count">0</span>
              <span className="bag-order">Order</span>
              <span>|</span>
              <span><FaGreaterThan /></span>
              <span className="profile"><CgProfile /></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
