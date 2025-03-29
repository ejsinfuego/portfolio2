'use client'
import React, { useState, useMemo, useEffect } from "react";
import type { Viewport } from "next";
import ProjectCard from "../components/ProjectCard";
import { Email, Github, Linkedin } from "@deemlol/next-icons";
import { useRouter } from "next/navigation";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
}

export default function Home() {
  const [mouseLocation, setMouseLocation] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState<string>("about-me");
  const router = useRouter();
  
  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setMouseLocation({ x:  e.clientX + 100, y: e.clientY });
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

  
const horizontalLine = useMemo(() => {
  const HorizontalLine = ({ active }: { active: boolean }) => (
    <hr className={`mx-2 ${active ? 'text-teal-50 w-[200px]' : 'text-[#5a545460] w-[100px]'} transition-all duration-300 ease-linear`}></hr>
  );
  HorizontalLine.displayName = 'HorizontalLine';
  return HorizontalLine;
}, [activeSection]);

  return (
    <div id="page" className="bg-[#101820] min-w-[100] flex justify-center mx-auto text-[#eaeaea9d] min-h-screen antialiased ">
      <div className="flex flex-col md:flex-row gap-32 justify-center rounded-lg font-sans max-w-screen-xl">
      <header className="flex flex-col w-full md:sticky top-0 tracking-tight items-start justify-center md:justify-start min-h-screen font-sans lg:max-h-screen z-10 px-8 md:px-16 p-20">
        <div className="flex flex-col">
        <h1 className="text-6xl font-extrabold text-nowrap text-teal opacity-0.5">Ej Sinfuego</h1>
        <p className="text-[#eaeaea9d] mt-8 text-lg md:text-2xl w-72 tracking-tight">Back-end Developer</p>
        <p className="text-[#eaeaea9d] text-lg md:text-2xl w-72 tracking-tight">with Front-end Skills</p>
        </div>

        <nav className="hidden md:flex md:flex-col justify-start items-start gap-4 mt-12 px-2 ">
          <li className={`text-[#eaeaea9d] ${activeSection === 'about-me' && 'text-teal-50'} flex flex-row flex-auto justify-center items-center hover:text-gray-50 cursor-pointer`}
          onClick={() => {
            setActiveSection("about-me");
            const aboutMe = document.getElementById("about-me");
            aboutMe?.scrollIntoView({ behavior: "smooth" });
          }
          }
          >About Me {horizontalLine({ active: activeSection === 'about-me'})}</li>
          <li className={`text-[#eaeaea9d] ${activeSection === 'projects' && 'text-teal-50'} flex flex-row flex-auto justify-center items-center hover:text-gray-50 cursor-pointer`}
           onClick={() => {
            setActiveSection("projects");
            const aboutMe = document.getElementById("projects");
            aboutMe?.scrollIntoView({ behavior: "smooth" });
          }}
          >Projects
          {horizontalLine({ active: activeSection === 'projects'})}
          </li>
        </nav>
        <div className="flex flex-row gap-4 mt-12">
        <Github size={24} className="cursor-pointer" color="#eaeaea9d" onClick={() => {
          router.push('https://github.com/ejsinfuego');
        }} />
        <Linkedin size={24} color="#eaeaea9d" className="cursor-pointer" 
        onClick={() => {
          router.push('https://www.linkedin.com/in/edzeljohnsinfuego/');
        }}
        />
        <a className="w-1 h-1 bg-[#eaeaea9d] rounded-full" href="https://edzeljohnsinfuego@gmail.com">
        <Email size={24} color="#eaeaea9d" className="cursor-pointer hover:text-white"
        />
        </a>
        </div>
      </header>
      <main className="flex flex-col gap-12 justify-start flex-auto min-w-screen items-start md:py-20 px-20">
        <div id="about-me" className="flex flex-col py-10 text-lg font-sans items-start justify-start">
          
          <p >
            I'm a software developer who enjoys to build things. I have various experiences across Back end and Front end development. I just recently realize that I also love tinkering with DevOps tools. I find fulfillment in crafting robust and scalable solutions that solve real-world problems.
          </p>
          <br />
          <p >
            I currently work as a Freelance developer working on maintenance and new features for a few clients like <a className="text-slate-300 hover:text-sky-400" href="https://thefreelancemovement.com">The Freelance Movement Tribe</a> where I work on on <a className="text-slate-300 hover:text-sky-400" href="https://tfmt.ph">Atlas</a>  - a platform that helps freelancers learn and grow their business. The other project is an E-Commerce platform for a small business in United States.
          </p>
          <br />
          <p >
            I&apos;m a fan of mystery fiction novel in my spare time. I also enjoy playing video games and watching movies. I&apos;m a big fan of the Marvel Cinematic Universe and I&apos;m looking forward to the next phase of the MCU.
          </p>
          
        </div>
          <div id="projects" className="flex flex-col min-h-screen max-w-screen-xl min-w-full font-sans items-start justify-start">
              <ProjectCard
              title="Junior Software Developer - The Freelance Movement Tribe"
              description="Atlas is a Learning Management System that helps freelancers learn and grow their business. It is a platform that offers courses, workshops, and resources to help freelancers succeed in their business. It has a multi-role system that allows users to have different access levels depending on their role in the platform. I work on maintenance and new features for the platform."
              link="thefreelancemovement.com"
              tags={["RedwoodJS", "PosgreSQL", "ReactJS", "GraphQL", "TailwindCSS", "AWS", "Vercel", "VPS"]}
              dateFrom="2024"
              dateTo="Present"
            />

            <ProjectCard
              title="E-Commerce Platform - Client"
              description="This is an e-commerce platform for a bakery in Austin, Texas. It compose of both client facing and admin facing features. The client facing features include product listing, product details, and cart. The admin facing features include product management, order management, and user management"
              link="https://bellasbakeryatx.com/"
              tags={["Spring-Boot", "ReactJS", "NextJS", "ExpressJS", "Heroku"]}
              dateFrom="2024"
              dateTo="Present"
            />
          </div>

      </main>
      </div>
      
  </div>
  );
}