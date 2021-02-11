import React from "react";
import Divider from "../common/Divider";
import "./styles.css";

const Menu = () => {
  return (
    <div className="menu-container">
      <h1>Flavio Riva</h1>
      <p>Doctoral Candidate, Fundação Getulio Vargas</p>
      <Divider />
      <div className='links'>
        <a href="./#bio">Bio</a>
        <a href="./#contact">Contact</a>
        <a href="./#contact2">Learning</a>
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
