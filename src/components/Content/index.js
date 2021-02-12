import React from 'react';
import Bio from './Bio';
import Contact from './Contact';
import Divider from '../common/Divider';
import WorkingPapers from './WorkingPapers';
import Publications from './Publications';
import './styles.css';

const Content = () => {
  return (
    <div className="content-container">
      <Bio />
      <Divider />
      <Contact />
      <Divider />
      <WorkingPapers />
      <Divider />
      <Publications />
    </div>
  )
}

export default Content;
