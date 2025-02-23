'use client'
import React, { useEffect, useState } from 'react'
import { SYLLABUS, syllabus } from '../utils/syllabus';
import "../style.css"
import { getUserProgress, saveUserProgress } from '../helper';
import Avatar from './Avatar';
import Image from 'next/image';
import tick from "../utils/tick.svg"
import greenTick from "../utils/greenTick.svg"
import download from "../utils/download.svg"
import Link from 'next/link';

const CourseSteps = () => {
const [progress, setProgress] = useState(1);
const [done, setIsDone] = useState(false);

useEffect(() => {
    const savedProgress = getUserProgress()
    if (savedProgress) setProgress(savedProgress);
}, []);


const calProgressHeight = () => {
    return ((progress - 1) / (syllabus.length)) * 100;
  };

  const calstepHeight = (isFinished: boolean | undefined) => {
    console.log(isFinished)
    // height check for finish tag
    // if(isFinished) return '0'
    return Math.floor(syllabus.length/100);
  }

  // Enable done/undone
  const handleStepClick = (step: SYLLABUS) => {
    // const newProgress = Math.max(progress, step.id);
    // if(step.id > progress + 1) return
    const isDone = step.id == syllabus?.length - 1 || step.id == syllabus?.length
    // const newProgress = step.id == syllabus?.length - 1 ? step.id + 2 : step.id == syllabus?.length ? step.id + 1 : step.id
    const newProgress = step.id == syllabus?.length ? step.id + 1 : step.id
    saveUserProgress(newProgress)
    setIsDone(isDone)
    setProgress(newProgress);
  };
  return (<>
  <div className='steps-container'>
    <Avatar progress={progress} calProgressHeight={calProgressHeight}  />
    {syllabus?.map((step, i) => {
      const isLessonDone =  progress > i + 1 || done
        return <div key={step.id} className={`step-wrapper ${
          isLessonDone ? "done" : ""
        } ${progress === i + 1 ? "active" : ""}`}
        onClick={() => handleStepClick(step)}
        style={{
          height : `${calstepHeight(step.isFinished)}%`
        }}
        >
            <div className='step-content'>
            <div className='step-circle'>
            {isLessonDone && !step.isFinished ? <Image src={tick} alt={""}/> : null}
            {done && step.isFinished ? <Image src={download} alt={""}/> : null}
            </div>
            <h3>{step.title}</h3>
            </div>
            <Link href={`/lectures/${step.id}`}>
            <div className={progress === i + 1 ? "step-card active-card" : "step-card"}>
              <div className='step-status'>
                <span className="step-tag">{step.title}</span>
                {isLessonDone && !step.isFinished ? <Image src={greenTick} alt={""}/> : null}
                {done && step.isFinished ? <Image src={download} alt={""}/> : null}
                </div>
                <p>{step.description}</p>
              </div>
              </Link>
        </div>
    })}
     <div
          className="progress-bar">
          <div
            className="progress"
            style={{height: `${calProgressHeight()}%`}}
          ></div>
        </div>
      </div>
  </>)
}

export default CourseSteps