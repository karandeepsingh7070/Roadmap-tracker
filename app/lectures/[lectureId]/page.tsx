import Header from '@/app/Components/Header'
import "../style.css"
import React from 'react'
import { SYLLABUS, syllabus } from '@/app/utils/syllabus';
import BackCTA from '../BackCTA';

// interface Lecture {
//     params : {
//         lectureId : string
//     }
// }
type ParamProps = {
  params: Promise<{ lectureId: string }>;
};
const LecturePage = async ({params}: ParamProps) => {
const param = await params
const data: SYLLABUS = syllabus[(parseInt(param?.lectureId) - 1)]
  return (<>
  <Header />
  <div className='lecture-container'>
  <BackCTA />
  Lecture Number : {param?.lectureId}
    <h2>{data.title}</h2>
    <h4>{data.description}</h4>
  </div>
  </>)
}

export default LecturePage