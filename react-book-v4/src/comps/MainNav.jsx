import React from "react";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    <ul className="nav_ul">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/insert">Insert</Link>
      </li>
      <li>
        <Link to="List View">List View</Link>
      </li>
    </ul>
  );
}

export default MainNav;
