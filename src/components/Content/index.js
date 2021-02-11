import React from 'react';
import Bio from './Bio';
import Contact from './Contact';
import Divider from '../common/Divider';
import './styles.css';
import Contact2 from './PolicyRepository';

const Content = () => {
  return (
    <div className="content-container">
      <Bio />
      <Divider />
      <Contact />
      <Divider />
    </div>
  )
}

export default Content;
