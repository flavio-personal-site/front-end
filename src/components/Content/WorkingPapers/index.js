import React, { useState } from 'react';
import Title from '../../common/Title';
import './styles.css';

const WorkingPapers = () => {
  const [abstractIsVisible, setAbstractIsVisible] = useState(false);
  return (
    <div id="working-papers">
      <Title> Working Papers</Title>
      <p>Artificial Intelligence, Teacher Tasks and Individualized Pedagogy (with Bruno Ferman and Lycia Lima)</p>
      <p>
        <a onClick={() => setAbstractIsVisible(!abstractIsVisible)}>Abstract{abstractIsVisible ? ': ' : " (click to expand)"}</a>
        {abstractIsVisible ?  "Using state-of-the-art technology, we document that adults in Chennai sleep only 5.5 hours per night on average despite spending 8 hours in bed. Their sleep is highly interrupted, with sleep efficiency---sleep per time in bed---comparable to those with disorders such as sleep apnea or insomnia. A randomized three-week treatment providing information, encouragement, and improvements to home sleep environments increased sleep duration by 27 minutes per night but came at the cost of more time in bed. Contrary to expert predictions, increased night sleep had no detectable effects on cognition, productivity, decision-making or well-being, and led to small decreases in labor supply. Yet, increased sleep can have benefits in this setting: short afternoon naps at the workplace improved an overall index of outcomes by 0.12 standard deviations, with significant increases in productivity, psychological well-being, and cognitive function, but less time available for work." : ''}
      </p>
      <p>AEA Registration</p>
      <a href='#'>Full Pre-analysis Plan (pdf)</a>
      <p>
        <span>Media Coverage: </span>
        <a href="">Nexo I</a>,{' '}
        <a href="">Nexo II</a>,{' '}
        <a href="">Headline</a>{' '}
      </p>
    </div>
  )
}

export default WorkingPapers;
