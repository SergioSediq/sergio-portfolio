"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "On-Orbit Collision Predictor",
    description: `ML-powered satellite collision prediction system for space agencies. Analyse CDM data, calculate collision probabilities, and visualize orbital risks with Django + Next.js + MATLAB.`,
    link: "https://github.com/SergioSediq/on-orbit-collision-predictor",
    images: [
      "/assets/projects-screenshots/collision-predictor/landing.png",
    ],
  },
  {
    id: 2,
    name: "CatchUp",
    description: `Personal connection assistant for iOS. Smart reminders, message suggestions, and conversation notes to stay in touch with the people who matter. SwiftUI · SwiftData.`,
    link: "https://github.com/SergioSediq/CatchUp",
    images: [
      "/assets/projects-screenshots/catchup/landing.png",
    ],
  },
  {
    id: 3,
    name: "MyHealthPal",
    description: `A unified, AI-powered health companion that combines Next.js, Spring Boot, and Flask. Delivers intelligent medical guidance, empathetic mental health support (Pal-Chat), and local healthcare discovery.`,
    link: "https://github.com/SergioSediq/MyHealthPal",
    images: [
      "/assets/projects-screenshots/myhealthpal/landing.png",
    ],
  },
  {
    id: 4,
    name: "JNTUA Results Analyser",
    description: `the go-to app for JNTUA students, empowering them to analyze, compare, and view classwise results effortlessly.
     Dive into your academic journey with ease, track your progress, and gain valuable insights.`,
    link: "/projects/4",
    images: ["/assets/projects-screenshots/jra/1.png"],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
