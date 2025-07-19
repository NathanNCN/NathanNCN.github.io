'use client';

import { HiArrowSmallDown } from "react-icons/hi2";
import { motion } from "framer-motion";
import PathContainer from "./components/PathContainer";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-center mx-auto">
        <div className="flex flex-col items-start lg:items-center px-4 sm:px-8 w-full mx-auto">
          {/* Name Container */}
          <div className="flex flex-col gap-2 sm:gap-4 w-full lg:w-[80%] lg:ml-auto">
            <motion.h1 
              className="text-[15vw] sm:text-[10vw] md:text-[10vw] lg:text-[7vw] leading-[0.8] font-[200] text-black tracking-wider"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}>
              Nathan
            </motion.h1>
            <motion.h1 
              className="text-[15vw] sm:text-[8vw] md:text-[8vw] lg:text-[6vw] leading-[0.8] font-[200] text-black tracking-wider pl-[15%] sm:pl-[30%] md:pl-[25%] lg:pl-[15%]"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}>
              Chau-Nguyen
            </motion.h1>
          </div>
          
          {/* Role Description */}
          <motion.p 
            className="text-[4vw] sm:text-[2.5vw] md:text-[2vw] lg:text-xl leading-relaxed font-[200] tracking-wide pl-[1vw] lg:pl-0 text-neutral-500 mt-8 sm:mt-12 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Mathematics 2029 @ University of Waterloo • Aspiring Software Engineer • Kitchener, ON
          </motion.p>
         
          <TechStack />

          <motion.div 
            className="w-full flex justify-center items-center mt-16 sm:mt-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              animate={{ y: [-8, 8] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <HiArrowSmallDown size={32} className="text-neutral-400"/>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <PathContainer />
      </>
  );
}
