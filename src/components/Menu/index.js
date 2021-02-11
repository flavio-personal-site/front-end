import React from "react";
import "./styles.css";

const Menu = () => {
  return (
    <div className="menu-container">
      <h1>Flavio Riva</h1>
      <p>Doctoral Candidate, Fundação Getulio Vargas</p>
      <div className="divider">
        <span />
      </div>
      <div className='links'>
        <a href="#">Bio</a>
        <a href="#">Contact</a>
        <a href="#">Learning</a>
        <a href="#">Policy Repository</a>
        <a href="#">Policy Work</a>
        <a href="#">Publications</a>
        <a href="#">Working Papers</a>
        <a href="#">Work in Progress</a>
      </div>
    </div>
  );
};

export default Menu;
