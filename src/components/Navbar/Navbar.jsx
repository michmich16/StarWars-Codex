import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../navlinks";
import style from './Navbar.module.scss';
export const Navbar = () => {
  return (
    <nav className={style.navBar}>
      {navLinks.map((item) => {
        return (
                <NavLink key={item.title} to={item.link}>
                    {item.title}
                </NavLink>
          
        );
      })}
    </nav>
  );
};