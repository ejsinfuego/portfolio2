import SideProject from "./SideProject";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "@deemlol/next-icons";
const Projects = () => {
  const projects = [
    {
      title: "Stickier Note",
      description: "Just a simple sticky note for native desktop application. I made it overlay on top of other applications so I can still see the note. This is still a work in progress (im adding small features on my free time).",
      image: "/images/stickier-note.gif",
      tags: ["Electron", "ReactJS", "TailwindCSS"],
      repository: "https://github.com/ejsinfuego/stickier-note",
    },
    {
      title: "LITAW: Local Indexing of Theses and Academic Works",
      description:
        "A web application that allows students in the university to search for theses and academic works. These includes management of theses and academic works and role-based access control.",
      image: "/images/litaw.jpeg",
      tags: ["Laravel", "MySQL", "TailwindCSS", "VPS"],
      repository: "https://github.com/ejsinfuego/litaw-final.git",
      demo: "https://drive.google.com/file/d/1VqXTTZOhQM15LuYLaXwwWObOyr_m9tAx/view?usp=sharing"
    },
    {
      title: "Hinagiban: A 3D Horror Game",
      description:
        "A quest based 3D horror game that the evironment is based on my college campus. This is a team collaboration where I did the integration of design to 3D model and the gameplay.",
      image: "/images/hinagiban.png",
      repository: "https://github.com/ejsinfuego/horror-game-godot",
      demo: "https://ejsinfuego.github.io/horror-game-godot/",
      tags: ["Godot", "GDScript", "Blender"],
    },
    {
      title: "Make Page",
      description: "A package that is a command line tool to create page component with InertiaJS when I'm working with Laravel",
      image: "/images/make-page.gif",
      tags: ["Laravel", "InertiaJS", "PHP"],
      repository: "https://github.com/ejsinfuego/laravel-inertia-create-page-component.git"
    },
    {
      title: "File Sorter",
      description: "A simple file organizer that group files based on their file type (or name). This is a personal project that I made to help me organize my files during when I was sophomore in college.",
      image: "/images/file-sorter.png",
      tags: [ "VB.Net"],
      repository: "https://github.com/ejsinfuego/file-organizer-VB.NET?tab=readme-ov-file"
    }
    // Add more projects here as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col gap-2 px-4 sm:px-8 sm:py-20 md:px-16 w-100">
      <h2 className="text-2xl md:text-4xl relative w-full sm:text-2xl font-bold text-teal opacity-0.5 w-100">Other projects that worth mentioning...
      </h2>
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="min-h-[auto] "
      >
        <SideProject {...projects[currentIndex]} />
      </motion.div>
      <div className="flex justify-between w-100 ">
        <button
          onClick={handlePrevious}
          className="px-4 py-2 bg-none rounded"
        >
          <ArrowLeft size={24} color="#eaeaea9d" />
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2"
        >
          <ArrowRight size={24} color="#eaeaea9d" />
        </button>
      </div>
    </div>
  );
};

export default Projects;