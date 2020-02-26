import React from "react";

export default function Navbar() {
  return (
    <nav>
      <h1>todoR</h1>
      <div className="nav-content-box">
        <ul>
          <li>
            <a href="#">credits</a>
          </li>
          <li>
            <a href="#">author</a>
          </li>
        </ul>
        <i className="fab fa-github-square"></i>
      </div>
    </nav>
  );
}
