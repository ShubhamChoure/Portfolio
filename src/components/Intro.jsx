"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Twitter, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { motion, useInView } from "framer-motion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Component() {
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { margin: "-100px" });

  const staggerDelay = 0.2;

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#fc9003] bg-opacity-90" id="about">
      <Image
        src="/combg.png"
        alt="Background Image"
        fill
        style={{ objectFit: "cover" }}
        className="absolute z-[-1]"
      />
      <motion.div
        ref={contentRef}
        className="flex w-full h-full flex-col items-center justify-between pt-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: isContentInView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-5">
          <motion.div
            className="h-32 w-32 mx-auto rounded-full bg-[url('/selfie.jpeg')] bg-cover bg-center bg-no-repeat"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: isContentInView ? 1 : 0.8,
              opacity: isContentInView ? 1 : 0,
            }}
            transition={{ duration: 0.5, delay: staggerDelay }}
          />
          <motion.h1
            className="text-center text-3xl font-bold font-custom text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: isContentInView ? 0 : 20,
              opacity: isContentInView ? 1 : 0,
              rotate:isContentInView?-5:0,
            }}
            transition={{ duration: 0.5, delay: staggerDelay * 2 }}
          >
          <div className="w-8 p-0 mb-2 mr-6 border-2 border-white inline-block"></div>
           Shubham Prakash Choure
           <div className="w-8 p-0 mb-2 ml-6 border-2 border-white inline-block"></div>
          </motion.h1>

          <motion.p className=" font-cursive text-white text-center"
               initial={{ y: 20, opacity: 0 }}
               animate={{
                 y: isContentInView ? 0 : 20,
                 opacity: isContentInView ? 1 : 0,
               }}
               transition={{ duration: 0.5, delay: staggerDelay * 3 }}
          >Android  /  Web Developer</motion.p>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: isContentInView ? 0 : 20,
              opacity: isContentInView ? 1 : 0,
            }}
            transition={{ duration: 0.5, delay: staggerDelay * 4 }}
          >
            <a href="https://github.com/ShubhamChoure" target="_blank">
            <Github className="h-6 w-6 text-white fill-white hover:scale-125 transition-all duration-150" />
            </a>
            <a href="https://www.linkedin.com/in/shubham-choure-01a6b6287/" target="_blank">
            <Linkedin className="h-6 w-6 text-white fill-white hover:scale-125 transition-all duration-150" />
            </a>
            <a href="https://x.com/ShubhamChoure_7?t=7HMpN32DryLfJk5OcqR2-g&s=09" target="_blank">
            <Twitter className="h-6 w-6 text-white fill-white hover:scale-125 transition-all duration-150" />
            </a>
            <HoverCard>
              <HoverCardTrigger> <Mail className="h-6 w-6 text-white hover:scale-125 transition-all duration-150" /></HoverCardTrigger>
              <HoverCardContent>
                I’d love to connect! Email me at shubhamchoureps@gmail.com.
              </HoverCardContent>
            </HoverCard>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isContentInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: staggerDelay * 4 }}
          className="mt-auto mb-5 flex justify-center w-full"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="h-16 w-6 text-white" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
