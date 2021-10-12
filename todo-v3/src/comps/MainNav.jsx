import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContextProvider";

export const MainNav = () => {
  const { user } = useUserContext();
  console.log("user", user);
  const navList = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    user?.userid
      ? {
          id: 2,
          title: "Logout",
          link: "/logout",
        }
      : {
          id: 2,
          title: "Login",
          link: "/login",
        },
  ];
  const nav_item = navList.map((item) => {
    return (
      <li>
        <NavLink to={item.link}>{item.title}</NavLink>
      </li>
    );
  });
  return <ul>{nav_item}</ul>;
};
