import { useRef } from 'react';
import React from 'react';
import { motion, useInView } from 'framer-motion';

function Hero() {
  const ref = useRef();
  const isInView = useInView(ref); // Remove { once: true }
  const staggerDelay = 0.3;
  return (
    <motion.div
      className="w-full mt-10 py-10 bg-white flex flex-col justify-center items-center font-serif gap-6"
      ref={ref}
    >
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
        transition={{ duration: 0.5 , delay:staggerDelay}}
      >
        Hello, I'm Shubham Dev!
      </motion.h1>
      <motion.span className="font-cursive text-xl"
       initial={{ opacity: 0, y: 10 }}
       animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
       transition={{ duration: 0.5 , delay:staggerDelay*2 }}
      >
        A passionate developer with a knack for crafting innovative solutions.
      </motion.span>
      <a href='#projects'>
      <motion.button className="bg-orange-500 text-white p-4 rounded-full font-bold"
      initial={{opacity:0,scale:0.7}}
      animate={{opacity:isInView?1:0,scale:isInView?1:0.7}}
      transition={{duration:0.5,delay:staggerDelay*3}}
      >
        Explore My Work
      </motion.button>
      </a>
    </motion.div>
  );
}

export default Hero;
