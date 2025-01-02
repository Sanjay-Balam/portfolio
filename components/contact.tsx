"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import GlassCard from "./ui/glass-card";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <GlassCard className="p-8">
        <h2 className="text-3xl font-bold mb-8 text-glow">Contact Me</h2>
        <p className="text-gray-700 dark:text-white/80 mb-8">
          Please contact me directly at{" "}
          <a className="underline hover-lift inline-block" href="mailto:example@gmail.com">
            example@gmail.com
          </a>{" "}
          or through this form.
        </p>

        <form
          className="flex flex-col"
          action={async (formData) => {
            await sendEmail(formData);
          }}
        >
          <input
            className="h-14 px-4 rounded-lg glass-effect border border-white/10 transition-all duration-300 focus:scale-[1.01] focus:border-white/30 mb-3"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <input
            className="h-14 px-4 rounded-lg glass-effect border border-white/10 transition-all duration-300 focus:scale-[1.01] focus:border-white/30 mb-3"
            name="subject"
            type="text"
            required
            maxLength={500}
            placeholder="Subject"
          />
          <textarea
            className="h-52 my-3 rounded-lg glass-effect border border-white/10 p-4 transition-all duration-300 focus:scale-[1.01] focus:border-white/30"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <SubmitButton />
        </form>
      </GlassCard>
    </motion.section>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <motion.button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65 mt-2 neon-border self-center"
      disabled={pending}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </motion.button>
  );
}
