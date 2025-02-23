import Header from '@/app/Components/Header'
import "../style.css"
import React from 'react'
import { SYLLABUS, syllabus } from '@/app/utils/syllabus';
import BackCTA from '../BackCTA';

interface Lecture {
    params : {
        lectureId : string
    }
}
const LecturePage = ({params}:Lecture) => {
let data: SYLLABUS = syllabus[params.lectureId - 1]
  return (<>
  <Header />
  <div className='lecture-container'>
  <BackCTA />
  Lecture Number : {params.lectureId}
    <h2>{data.title}</h2>
    <h4>{data.description}</h4>
  </div>
  </>)
}

export default LecturePage