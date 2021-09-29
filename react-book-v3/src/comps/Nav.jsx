import React from "react";
import { NavLink } from "react-router-dom";
import "../css/MainNav.css";

// navgation의 모양을 만든 컴포넌트
function Nav() {
  return (
    <nav className="main_nav">
      {/* 내부에서는 a tag로 사용된다. */}
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/insert" exact>
        Insert
      </NavLink>
      <NavLink to="/list" exact>
        List View
      </NavLink>
    </nav>
  );
}

export default Nav;
