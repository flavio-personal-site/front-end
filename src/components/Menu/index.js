import React from "react";
import Divider from "../common/Divider";
import "./styles.css";

const Menu = () => {
  return (
    <div className="menu-container">
      <h1>Flavio Riva</h1>
      <p>Doctoral Candidate in Public Administration and Government, Fundação Getulio Vargas (FGV) </p>
      <div className='links'>
        <a href="./#bio">Bio</a>
        <a href="./#contact">Contact</a>
        <a href="./#working-papers">Working Papers</a>
        <a href="./#work-in-progress">Work in Progress</a>
        <a href="./#publications">Publications</a>        
        <a href="./#contact2">Learning</a>        
        <a href="#">Policy Repository</a>
        </div>
    </div>
  );
};

export default Menu;
