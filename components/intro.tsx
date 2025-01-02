"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { TypewriterEffect } from "./ui/typewriter-effect";
import GlassCard from "./ui/glass-card";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center dark:bg-black/80">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 text-center sm:mb-0 max-w-[60rem] scroll-mt-[100rem] relative"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-xy"></div>
      </div>
      
      <GlassCard className="p-8 backdrop-blur-xl">
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-bold !leading-[1.5]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <TypewriterEffect
              words={[
                {
                  text: "Hello, I'm Sanjay.",
                  className: "text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500",
                },
                {
                  text: "I'm a",
                  className: "text-2xl",
                },
                {
                  text: "full-stack developer",
                  className: "text-3xl font-bold text-glow",
                },
                {
                  text: "passionate in building dynamic and responsive",
                  className: "text-2xl",
                },
                {
                  text: "web Applications",
                  className: "text-3xl font-bold text-glow",
                },
              ]}
            />
          </motion.h1>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <a
              className="group px-7 py-3 flex items-center gap-2 rounded-full neon-border glass-effect hover:scale-105 transition-all"
              href="/resume.pdf"
              target="_blank"
            >
              Download Resume
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>

            <Link
              href="#contact"
              className="group px-7 py-3 flex items-center gap-2 rounded-full neon-border glass-effect hover:scale-105 transition-all"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            <div className="flex gap-3">
              <a
                className="p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full neon-border glass-effect hover:scale-105 transition-all"
                href="https://www.linkedin.com/in/sanjaybalam/"
                target="_blank"
              >
                <BsLinkedin />
              </a>

              <a
                className="p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full neon-border glass-effect hover:scale-105 transition-all text-[1.35rem]"
                href="https://github.com/Sanjay-Balam"
                target="_blank"
              >
                <FaGithubSquare />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </GlassCard>
    </section>
  );
}

export function GridBackground({ children }: { children: ReactNode }) {
  return (
    <div className="h-[60rem] w-full dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
}
