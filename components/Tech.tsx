'use client'
import SectionWrapper from "@/hoc/SectionWrapper";
import { technologies } from "@/constants";
import BallCanvas from "./canvas/BallCanvas";
const Tech = () => {
  return (
    <div className='flex  flex-wrap justify-center gap-10'>
    {technologies.map((technology)=>(
        <div  className="w-28-h-28 text-white "key={technology.name}>
           <BallCanvas icon={technology.icon.src}/> 
        </div>
    ))}
    </div>
  )
}

export default SectionWrapper(Tech,"");