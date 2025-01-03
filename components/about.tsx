"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 mx-auto"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <motion.p className="mb-3">
        I am a recent graduate (2024) in{" "}
        <span className="font-medium">Electronics and Communication Engineering (ECE)</span> with a 
        strong passion for problem-solving and a solid foundation in {" "} 
        <span className="font-medium">Data Structures and Algorithms (DSA).</span> My journey into programming has been driven by the 
        excitement of tackling complex challenges and finding efficient solutions.
      </motion.p>
      <motion.p className="mb-3">

      I have a solid grasp of frontend and backend technologies, 
      with hands-on experience in {" "}<span className="font-medium">React.js, Next.js, and Tailwind CSS</span> for building 
      dynamic user interfaces. On the backend, I am also familiar at {" "} <span className="font-medium">Express.js, Prisma ORM, 
      and PostgreSQL</span> for building scalable and robust applications. I also have experience working 
      with WebSockets to implement real-time communication features.
      </motion.p>

      <motion.p className="mb-3">
        I am particularly comfortable with{" "}
        <span className="font-medium">Next.js 14</span>,{" "}
        <span className="font-medium">Node.js</span>, and{" "}
        <span className="font-medium">Tailwind CSS</span> and have also gained
        proficiency in <span className="font-medium">Docker</span>. These skills
        and my continuous learning mindset are preparing me for my goal of
        becoming a{" "}
        <span className="font-medium">full-time full-stack developer</span>.
      </motion.p>
    </motion.section>
  );
}
