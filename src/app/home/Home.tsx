'use client'
import React, { useState, useEffect } from "react";
import type { Viewport } from "next";
import ProjectCard from "../components/ProjectCard";
import { Email, Github, Linkedin } from "@deemlol/next-icons";
import { useRouter } from "next/navigation";
import Nav from "./Nav";
import Projects from "../page/Projects";

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
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }

    const observer = new IntersectionObserver(callback, options);
    const sections = ['about-me', 'experiences', 'projects', 'blog'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    }

  }, [])

  return (
    <div id="page" className="text-[#eaeaea9d] min-h-screen antialiased">
      <div id="page-container" className="flex flex-col w-100 md:flex-row gap-12 relative rounded-lg font-sans md:px-36">
      <header className="flex flex-col flex-none w-auto md:sticky top-0 tracking-tight items-start justify-center md:justify-start min-h-96 font-sans max-h-[300px] sm:max-h-screen z-10 px-4 sm:px-8 sm:py-20 md:px-16">
        <div className="flex flex-col relative">
        <h1 className="text-4xl relative w-full sm:text-6xl font-extrabold text-nowrap text-teal opacity-0.5">Ej Sinfuego</h1>
        <p className="text-[#eaeaea9d] md:mt-2 mt-2 text-lg md:text-lg w-72 leading-3 md:leading-none">building bridges between concepts and working code</p>
        </div>

        <Nav activeSection={activeSection} setActiveSection={setActiveSection} />
       
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
      <main className="flex-col flex w-full grow max-w-full mx-0 gap-12 justify-start md:flex-auto relative items-start md:py-20 px-4 sm:px-10 py-20">
        <div id="about-me" className="flex min-w-20 flex-col py-10 text-md sm:text-lg font-sans w-100 items-start justify-start">
        <p>
            I&apos;m a software developer who enjoys to build things. I have various experiences across Back end and Front end development. I just recently realize that I also love tinkering with DevOps tools. I find fulfillment in crafting robust and scalable solutions that solve real-world problems.
          </p>
                    <br />
                    <p >
                      I currently work as a Freelance developer working on maintenance and new features for a few clients like <a className="text-slate-300 hover:text-sky-400" href="https://thefreelancemovement.com">The Freelance Movement Tribe</a> where I work on on <a className="text-slate-300 hover:text-sky-400" href="https://tfmt.ph">Atlas</a>  - a platform that helps freelancers learn and grow their business. The other project is an E-Commerce platform for a small business in United States.
                    </p>
                    <br />
                    <p>
            I&apos;m a fan of mystery fiction novel in my spare time. I also enjoy playing video games and watching movies. I&apos;m a big fan of the Marvel Cinematic Universe and I&apos;m looking forward to the next phase of the MCU.
          </p>
        </div>
          <div id="experiences" className="flex flex-col min-h-screen min-w-full font-sans items-start justify-start">
              <ProjectCard
              title="Junior Software Developer - The Freelance Movement Tribe"
              description="Atlas is a Learning Management System that helps freelancers learn and grow their business. It is a platform that offers courses, workshops, and resources to help freelancers succeed in their business. It has a multi-role system that allows users to have different access levels depending on their role in the platform. I work on maintenance and new features for the platform."
              link="thefreelancemovement.com"
              tags={["RedwoodJS", "PosgreSQL", "ReactJS", "GraphQL", "TailwindCSS", "AWS", "Vercel", "VPS"]}
              dateFrom="2024"
              dateTo="Present"
            />

            <ProjectCard
              title="E-Commerce Platform - Bellas Bakery"
              description="This is an e-commerce platform for a bakery in Austin, Texas. It compose of both client facing and admin facing features. The client facing features include product listing, product details, and cart. The admin facing features include product management, order management, and user management"
              link="_blank"
              tags={["Spring-Boot", "ReactJS", "NextJS", "ExpressJS", "Heroku"]}
              dateFrom="2024"
              dateTo="Present"
            />
          </div>
          <div id="projects" className="flex flex-col min-h-screen min-w-auto font-sans items-start justify-start">
            <Projects />
          </div>
      </main>
      </div>
      
  </div>
  );
}