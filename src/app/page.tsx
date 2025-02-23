'use client';
import Head from "next/head";
import Image from "next/image";
import { motion } from "motion/react";
import { use, useEffect, useState } from "react";
import ProjectCard from "./components/ProjectCard";

export default function Home() {

  const [mouseLocation, setMouseLocation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setMouseLocation({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const page = document.getElementById("page");
    //add a gradient effect to the background
    if (page) {
      const gradient = `radial-gradient(circle at ${mouseLocation.x}px ${mouseLocation.y}px, rgba(16, 24, 32, 1), #000000)`;
      page.style.background = gradient;
    }

  }, [mouseLocation]);

  



  return (
    <div id="page" className="bg-[#101820] min-w-[100] flex justify-center mx-auto text-[#eaeaea9d] min-h-screen antialiased">
      <div className="flex flex-row min-w-screen gap-32 justify-center rounded-lg font-sans max-w-screen-xl">
       <header className="flex flex-col flex-auto min-w-screen sticky top-0 tracking-tight items-start justify-start min-h-screen font-sans lg:max-h-screen z-10 px-18 py-28">
        <h1 className="text-6xl font-extrabold text-nowrap text-teal opacity-0.5">Ej Sinfuego</h1>
        <p className="text-[#eaeaea9d] mt-8 text-2xl w-72 tracking-tight font-sans">Back end Developer</p>
        <p className="text-[#eaeaea9d] text-xl w-72">with Front end Skills</p>
      </header>
      <main className="flex flex-col gap-12 justify-start flex-auto min-w-screen items-start py-28">
        <div id="about-me" className="flex flex-col text-lg font-sans items-start justify-start">
          
          <p >
            I'm a software developer who enjoys to build things. I have various experiences across Back end and Front end development. I just recently realize that I also love tinkering with DevOps tools. I find fulfillment in crafting robust and scalable solutions that solve real-world problems.
          </p>
          <br />
          <p >
            I currently work as a Freelance developer working on maintenance and new features for a few clients like <a className="text-slate-300 hover:text-sky-400" href="https://thefreelancemovement.com">The Freelance Movement Tribe</a> where I work on on <a className="text-slate-300 hover:text-sky-400" href="https://tfmt.ph">Atlas</a>  - a platform that helps freelancers learn and grow their business. The other project is an e-commerce platform for a small business in United States.
          </p>
          <br />
          <p >
            I&apos;m a fan of mystery fiction novel in my spare time. I also enjoy playing video games and watching movies. I&apos;m a big fan of the Marvel Cinematic Universe and I&apos;m looking forward to the next phase of the MCU.
          </p>
          
        </div>
          <div id="projects" className="flex flex-col min-h-screen max-w-screen-xl min-w-full font-sans items-start justify-start">
           
              <ProjectCard
              title="Atlas - The Freelance Movement Tribe"
              description="Atlas is a Learning Management System that helps freelancers learn and grow their business. It is a platform that offers courses, workshops, and resources to help freelancers succeed in their business. It has a multi-role system that allows users to have different access levels depending on their role in the platform. I work on maintenance and new features for the platform."
              link="thefreelancemovement.com"
              tags={["RedwoodJS", "PosgreSQL", "ReactJS", "GraphQL", "TailwindCSS", "AWS", "Vercel", "VPS"]}
              dateFrom="2024"
              dateTo="Present"
            />
          </div>

      </main>
      </div>
      
  </div>
  );
}
