import React from 'react';
import './styles.css';

const Title = ({children}) => {
  return (
    <div id="title">
      <h2>{children}</h2>
    </div>
  )
}

export default Title;
