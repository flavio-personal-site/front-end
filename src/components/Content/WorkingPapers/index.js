import React, { useState } from 'react';
import Title from '../../common/Title';
import AWEwpaper from "../../../pdf/ferman_lima_riva__AWE_wpaper_0221.pdf"
import AWEwpaperRF from '../../../pdf/ferman_lima_riva__AWE_wpaper_0221_fig1.jpg';
import './styles.css';



const WorkingPapers = () => {
  const [abstractIsVisible, setAbstractIsVisible] = useState(false);
  return (
    <div id="working-papers">
      <Title> Working Papers</Title>
      <a href={AWEwpaper} download><span>Artificial Intelligence, Teacher Tasks and Individualized Pedagogy</span></a>
      <p>(with <a href='https://sites.google.com/site/brunoferman/home'>Bruno Ferman</a> and Lycia Lima)</p>
      <p>
        <a onClick={() => setAbstractIsVisible(!abstractIsVisible)}>Abstract{abstractIsVisible ? ': ' : " (click to expand)"}</a>
        {abstractIsVisible ?  "This paper investigates how educational technologies that use different combinations of artificial and human intelligence are incorporated into classroom instruction, and how they ultimately affect learning. We conducted a field experiment to study two technologies that allow teachers to outsource grading and feedback tasks on writing practices of high school seniors. The first technology is a fully automated evaluation system that provides instantaneous scores and feedback. The second one uses human graders as an additional resource to enhance grading and feedback quality in aspects in which the automated system arguably falls short. Both technologies significantly improved students' essay scores in a large college admission exam, and the addition of human graders did not improve effectiveness in spite of increasing perceived feedback quality. Both technologies also similarly helped teachers engage more frequently on personal discussions on essay quality with their students. Taken together, these results indicate that teachers' task composition shifted toward nonroutine activities and this helped circumvent some of the limitations of artificial intelligence. More generally, our results illustrate how the most recent wave of technological change may relocate labor to analytical and interactive tasks that still remain a challenge to automation." : ''}
      </p>
      <p><a href='https://www.socialscienceregistry.org/trials/3729/history/52390'>AEA Registration</a></p>
      <p></p>
      <p>
        <span>Media: </span>
        <a href='https://www.nexojornal.com.br/colunistas/2021/O-uso-de-intelig%C3%AAncia-artificial-na-prepara%C3%A7%C3%A3o-para-o-Enem'>[Nexo I (BR)]</a> {' '}
        <a href='https://www.nexojornal.com.br/colunistas/2020/Li%C3%A7%C3%B5es-sobre-o-uso-de-recursos-tecnol%C3%B3gicos-na-educa%C3%A7%C3%A3o?utm_source=NexoNL&utm_medium=Email&utm_campaign=anexo'>[Nexo II (BR)] </a> {' '}
        <a href='https://twitter.com/Headline_BR/status/1359583487657988102'>[Headline (BR)]</a>{' '}
      </p>
      <img src='foto.jpg'/>
    </div>
  )
}

export default WorkingPapers;
