'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import femaleAvatar from "../utils/femaleAvatar.svg"

interface Avatar {
  progress : number,
  calProgressHeight: () => number 
}
const Avatar = ({progress, calProgressHeight}: Avatar) => {

  const [currentState,setCurrentState] = useState(0)
  useEffect(() => {
    setCurrentState(calProgressHeight())
  },[progress])

  return (
    <div className="avatar">
      <Image src={femaleAvatar} alt={""} style={{ top: `${currentState}%` }}/>
    </div>
  );
};

export default Avatar;
