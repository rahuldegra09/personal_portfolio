'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from 'react-tilt';
import {services} from "@/constants/index";
import SectionWrapper from '@/hoc/SectionWrapper';
const ServiceCard=({title,index,icon }:any) => {
  return (
    <Tilt className=' xs:w-[280px] w-[270px] flex flex-wrap'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px] rounded-[20px] shadow-card'
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 300,
          }}
          className='bg-indigo-900 rounded-[20px] py-6 px-12 min-h-[350px] flex justify-evenly items-center flex-col'
        >
          <Image
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </Tilt>
      </motion.div>
    </Tilt>
  )
}
 
const About = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-gray-200 uppercase tracking-wider">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
        </motion.div>
        <motion.p
        variants={fadeIn("up","spring",0.1,1)}
        className='mt-4 text-gray-200 text-[17px] flex  leading-[30px]'>
        Hello, I&apos;m Rahul Degra, a proactive computer science student proficient in MongoDB, Java, Next.js, Tailwind CSS, HTML, and CSS. With a strong commitment to collaboration and client engagement, I specialize in crafting efficient, scalable, and user-friendly solutions that address real-world challenges. Let's team up to transform your ideas into reality!
        </motion.p>
      <div className=' mt-20  flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

        </div>
    </>
  )
}

export default SectionWrapper(About,"about")