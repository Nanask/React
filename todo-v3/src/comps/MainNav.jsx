import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

export const MainNav = ({ navList, children }) => {
  const nav_item = navList.map((item) => {
    return (
      <li>
        <NavLink to={item.link}>{item.title}</NavLink>
      </li>
    );
  });
  return (
    <BrowserRouter>
      <ul>{nav_item}</ul>
      {children}
    </BrowserRouter>
  );
};
