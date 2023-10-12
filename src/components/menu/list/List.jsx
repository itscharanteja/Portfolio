import React from "react";
import "../menu.scss";

export default function List({ set, menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={set}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={set}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={set}>
          <a href="#works">Works</a>
        </li>
        <li onClick={set}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}