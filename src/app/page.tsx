'use client';
import { useEffect, useMemo, useState } from "react";
import ProjectCard from "./components/ProjectCard";
import { Email, Github, Linkedin } from "@deemlol/next-icons";
import  Home from "./home/Home";
import { useRouter } from "next/router";

export default function HomePage() {
  return (
    <Home />
  );
}
