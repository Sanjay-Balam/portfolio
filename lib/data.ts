import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import twitterImage from "@/public/twitter.png";
import rmtdevImg from "@/public/rmtdev.png";
import petShopImage from "@/public/petshop.png";
import RoomchatImage from "@/public/Roomchat.png"
import SongcraftImage from "@/public/Songcraft.png"
import PaytmImage from "@/public/Paytm.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "ECE",
    location: "Chaitanya Bharathi Institute of Technology, Hyderabad.",
    description:
      "A recent graduate from CBIT, he is eager to explore new technologies and expand his skill set, focusing on software development.",
    describe: [
      "Studying algorithms, data structures, operating systems, and databases.",
      "Participating in coding competitions and technical projects.",
      "Developing problem-solving and software engineering skills.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2020 - May 2024",
  },
  {
    title: "Software Engineer Intern (VS developers)",
    location: "Hyderabad, India.",
    description:
      "Completed a 6-month Software engineer internship at VS developers, Implemented REST APIs for backend services in Node.js projects, optimizing request handling, im-proving response times, and ensuring secure, scalable communication between system components.",
    describe: [
      "Developed backend for web applications using and Node.js.",
      "Built RESTful APIs and managed databases with MongoDB.",
      "Collaborated with teams following Agile methodologies.",
      "Utilized Git for version control and continuous integration.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "June 2024 - Oct 2024",
  },
  {
    title: "Front-end Intern (Vectorsoft)",
    location: "Hyderabad, India.",
    description:
      "Coordinated in a team project to develop and maintain a web application, focusing on building dynamic features and fixing high-priority bugs. Utilized Next.js, TypeScript, TailwindCSS, ShadCN UI, and React Forms for frontend development, incorporating Atoms for efficient state management.",
    describe: [
      "Developed responsive UI components using React.js.",
      "Styled interfaces with Tailwind CSS for consistent design.",
      "Collaborated with cross-functional teams to meet project goals.",
      "Ensured browser compatibility and performance optimization.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2024 - present",
  },
  
] as const;

export const projectsData = [
  {
    title: "Chat Room Application",
    description:
      "Built a real-time chat app with WebSockets, React, TypeScript, and Express, allowing users to join rooms and message.",
    tags: ["websockects", "Express.js"],
    imageUrl: RoomchatImage,
    githubUrl: "https://github.com/Sanjay-Balam/Real-time-chat-app",
    demoUrl: "https://github.com/Sanjay-Balam/Real-time-chat-appx",
  },
  {
    title: "SongCraft",
    description:
      "Developed a SaaS platform for creating song queues with Google OAuth login, playlist curation, voting, and sharing, featuring a responsive UI.",
    tags: ["Next.js", "GraphQL", "Tailwind", "React Query"],
    imageUrl: SongcraftImage,
    githubUrl: "https://github.com/Sanjay-Balam/SongCraft",
    demoUrl: "https://song-craft-gizq.vercel.app/",
  },
  {
    title: "Paytm",
    description:
      "A vibrant landing page full-stack money transfer app with React, Node.js, Express, and MongoDB. Features secure transactions, JWT authentication, and request validation middleware.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: PaytmImage,
    githubUrl: "https://github.com/Sanjay-Balam/End-To-End-PayTM-app",
    demoUrl: "https://paytm-frontend-steel.vercel.app/",
  },
] as const;

export const skillsData = [
  // Frontend Technologies
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Tailwind CSS",
  "Framer Motion",

  // Backend Technologies
  "Node.js",
  "Express.js",
  "NestJS",
  "Prisma",
  "REST API",

  // Databases & ORM
  "MongoDB",
  "PostgreSQL",

  // DevOps & Tools
  "Git",
  "Docker",
  "GitHub Actions",
  "Linux",
  "Nginx",
  "AWS (EC2, S3)",
  "Vercel",
  "Grafana",

] as const;
