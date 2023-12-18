'use client'
import { useState,useRef } from "react"
import { motion } from "framer-motion"
import { styles } from "@/styles"
import SectionWrapper from "@/hoc/SectionWrapper"
import { slideIn } from "@/utils/motion"
import emailjs from '@emailjs/browser';
import EarthCanvas from "./canvas/Earth"


const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form ,setForm]=useState({
  name:'',
  email:'',
  message:''
  });
  const [loading,setloading]=useState(false);
  const handleChange =(e: any)=>{
    const {name,value}=e.target;
    setForm({...form,[name]:value })
  };
  const handleSubmit=(e:any)=>{
    e.preventDefault();
    setloading(true);

    emailjs.send('rahuldegra09','template_t5o9se8',
    {
      from_name:form.name,
      to_name:"Rahul",
      from_email:form.email,
      to_email:'rahuldegra09@gmail.com',
      message:form.message,
    },
    'iovjnauNEFaiHLNhm'
    )
     .then(()=>{
      setloading(false);
      alert('Thanks You.I will get back to you as soon as possible.');
      setForm({name:'',email:'',message:''});


     },(error)=>{
      setloading(false)
      console.log(error);
      alert('Something went wrong.')
     })

  };


  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-indigo-950 p-8 rounded-2xl'
      >
        <p className="sm:text-[18px] text-[14px] text-slate-200 uppercase tracking-wider">Get in touch</p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-indigo-900 py-4 px-6 placeholder:text-slate-400 text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-indigo-900 py-4 px-6 placeholder:text-slate-400  text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-indigo-900 py-4 px-6 placeholder:text-slate-400  text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-indigo-900 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-red-500'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");