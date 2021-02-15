import React from 'react';
import Bio from './Bio';
import Contact from './Contact';
import Divider from '../common/Divider';
import WorkingPapers from './WorkingPapers';
import WorkInProgress from './WorkInProgress';
import Publications from './Publications';

import './styles.css';

const Content = () => {
  return (
    <div className="content-container">
      {window.innerWidth < 768 ? <Divider /> : ""}
      <Bio />
      <Divider />
      <Contact />
      <Divider />
      <WorkingPapers />
      <Divider />
      <WorkInProgress />
      <Divider />
      <Publications />
    </div>
  )
}

export default Content;
