"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import ParticleBackground from "@/components/ui/particle-background";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-black overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <ParticleBackground />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center px-4 overflow-hidden"
      >
        <div className="fixed top-0 left-0 right-0 h-20 bg-gradient-to-b from-white via-white/50 to-transparent dark:from-black dark:via-black/50 dark:to-transparent z-20 backdrop-blur-sm" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            staggerChildren: 0.2,
          }}
          className="w-full"
        >
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </motion.div>

        <div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-black dark:via-black/50 dark:to-transparent z-20 backdrop-blur-sm" />
      </motion.div>
    </main>
  );
}
