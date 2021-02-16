import React, { useState } from 'react';
import Title from '../../common/Title';
import './styles.css';
import mita from '../../../pdf/figs/mita_map.PNG';



const NiceFiguresTables = () => {
  const [abstractIsVisible, setAbstractIsVisible] = useState(false);
  return (
    <div id="nice-figures-tables">
      <Title> Nice Figures and Tables</Title>
      <span >Dell, Melissa (2010). "The Persistent Effects of Peru's Mining Mita". Econometrica 78(6).</span>
      <img src={mita} alt="graph" />
    </div>
  )
}

export default NiceFiguresTables;
