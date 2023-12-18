'use client'
import { motion } from "framer-motion"
import { styles } from "@/styles"
import SectionWrapper from "@/hoc/SectionWrapper"
import { testimonials } from "@/constants"
import { fadeIn,textVariant } from "@/utils/motion"
import Image from "next/image"
const Testimonials = () => {
    return (
        <div className={`mt-12 bg-indigo-950 rounded-[20px]`}>
            <div
                className={`pt-4 rounded-2xl ${styles.padding} min-h-[200px]`}
            >
                <motion.div variants={textVariant()}>
                    <p className="sm:text-[18px] text-[14px] text-gray-200 uppercase tracking-wider">What others says</p>
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Testimonials</h2>
                </motion.div>
            </div>
            <div className={`-mt-12  pb-8 ${styles.paddingX} flex flex-wrap gap-7`}>
                {testimonials.map((testimonial, index) => (
                    <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
                ))}
            </div>
        </div>
    );
};


const FeedbackCard = ({index,testimonial, name, designation, company, image,}:any) => (
    <motion.div
        variants={fadeIn("down", "spring", index * 0.5, 0.75)}
        className='bg-gradient-to-r from-green-800 to-indigo-500 hover:from-pink-900 hover:to-yellow-900 p-10 rounded-3xl xs:w-[320px] flex flex-wrap h-[420px] w-[350px]'
    >
        <p className='text-white font-black text-[48px]'>"</p>

        <div className='mt-1'>
            <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

            <div className='mt-7 flex justify-between items-center gap-1'>
                <div className='flex-1 flex flex-col'>
                    <p className='text-white font-medium text-[16px]'>
                        <span className='blue-text-gradient'>@</span> {name}
                    </p>
                    <p className='mt-1 text-secondary text-[12px]'>
                        {designation} of {company}
                    </p>
                </div>

                <Image
                    src={image}
                    alt={`feedback_by-${name}`}
                    className='w-10 h-10 rounded-full object-cover'
                />
            </div>
        </div>
    </motion.div>
);
export default SectionWrapper(Testimonials, "test")