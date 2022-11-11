import React, { useEffect, useRef } from "react";
import { Container, Row } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";

import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import "../../styles/header.css";
import { cartUiActions } from "../store/shopping-cart/cartUiSlice";
const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Shop",
    path: "/shop",
  },
  {
    display: "Cart",
    path: "/cart",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
 
  const stickyHeaderFunc = () =>{
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__srcoll");
      } else {
        headerRef.current.classList.remove("header__srcoll");
      }
    });
  }
  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

    //? Ui-cart
    const dispatch = useDispatch()
    const cartsToggle = () => {
     dispatch(cartUiActions.toggle())
    }

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper">
          <div className="logo d-flex align-items-center gap-2">
            <img src={logo} alt="logo" />
            <h1>Multimart</h1>
          </div>

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu d-flex align-items-center gap-5 mb-0">
              {nav__links.map((item, index) => (
                <li className="nav__item">
                  <NavLink
                    to={item.path}
                    key={index}
                    className={(navClass) =>
                      navClass.isActive ? "active__menu" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap-3">
            <span className="heart__icon">
              <i class="ri-heart-2-line"></i>
              <span className="heart__badge">2</span>
            </span>

            <span className="cart__icon" onClick={cartsToggle}>
              <i class="ri-shopping-cart-2-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            <span className="user__icon">
              <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
            </span>

            <div className="mobile__menu" onClick={toggleMenu}>
              <span>
                <i class="ri-menu-fold-line"></i>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
