import React from 'react';
import Title from '../../common/Title';
import './styles.css';

const Contact = () => {
  return (
    <div id="contact">
      <Title>Contact</Title>

      <p>
        <span>Email: </span>
        flaviorussoriva@gmail.com
      </p>
      <p>
        <span>Tel: </span>
        +1 (857) 998-4505
      </p>
      <p>
        <span>Address: </span>
        Department of Economics
        Littauer Center M-30, Harvard University
        Cambridge, MA 02138
        U.S.A.
      </p>
      <p>
        <span>Teaching </span>
        Econ 2338: Behavioral Development Economics
        Econ 980: Behavioral Economics of Poverty and Development (junior seminar)
      </p>
    </div>
  )
}

export default Contact;
