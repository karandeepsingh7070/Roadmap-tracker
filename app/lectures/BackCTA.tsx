'use client'
import React from 'react'
import Image from 'next/image';
import back from "../utils/back.svg"
import { redirect } from 'next/navigation';

const BackCTA = () => {
  return (
    <div onClick={() => redirect("/")}><Image src={back} alt="" /><h5>Previous</h5></div>
  )
}

export default BackCTA