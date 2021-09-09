import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function MainNav() {
  const activeNavStyle = {
    backgroundColor: "green",
  };
  return (
    <ul className="main_menu">
      {/* Home을 클릭하면 "/"path로 가라 */}
      <li>
        <NavLink to="/" activeStyle={activeNavStyle} exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeStyle={activeNavStyle}>
          나의 소개
        </NavLink>
      </li>
      <li>
        <NavLink to="/bbs" activeStyle={activeNavStyle}>
          자유게시판
        </NavLink>
      </li>
      <li>
        <input placeholder="입력해보기" />
      </li>
    </ul>
  );
}

export default MainNav;
