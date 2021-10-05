import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import "../css/MainNav.css";

export const MainNav = ({ children, navList }) => {
  //   return <ul className="main_nav">{nav}</ul>;
  const align_right = {
    marginLeft: "auto",
  };

  const nav_items = navList.map((nav) => {
    return (
      //  align이 true라면 부착시켜라?
      <li className="nav_item" key={nav.id} style={nav.align && align_right}>
        <NavLink to={nav.link}>{nav.title}</NavLink>
      </li>
    );
  });
  return (
    <BrowserRouter>
      <ul className="main_nav">{nav_items}</ul>
      {children}
    </BrowserRouter>
  );
};
