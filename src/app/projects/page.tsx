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
    name: "MyHealthPal",
    description: `A unified, AI-powered health companion that combines Next.js, Spring Boot, and Flask. Delivers intelligent medical guidance, empathetic mental health support (Pal-Chat), and local healthcare discovery.`,
    link: "https://github.com/SergioSediq/MyHealthPal",
    images: [
      "/assets/projects-screenshots/myhealthpal/landing.png",
    ],
  },
  {
    id: 3,
    name: "GovLens",
    description: `AI-powered government news curator. Aggregate agency releases, legislative updates, and trusted news into a single source of truth. Summaries, Q&A, and bias signals.`,
    link: "https://github.com/SergioSediq/GovLens",
    images: [
      "/assets/projects-screenshots/govlens/landing.png",
    ],
  },
  {
    id: 4,
    name: "Chatify",
    description: `Real-time web chat with Vite, React, TypeScript, and Firebase. Clean UI with 1:1 and group conversations, replies, read receipts, emoji and reactions, and media sharing.`,
    link: "https://github.com/SergioSediq/Chatify",
    images: [
      "/assets/projects-screenshots/chatify/landing.png",
    ],
  },
  {
    id: 5,
    name: "CatchUp",
    description: `Personal connection assistant for iOS. Smart reminders, message suggestions, and conversation notes to stay in touch with the people who matter. SwiftUI · SwiftData.`,
    link: "https://github.com/SergioSediq/CatchUp",
    images: [
      "/assets/projects-screenshots/catchup/landing.png",
    ],
  },
  {
    id: 6,
    name: "Global Weather Visualisation",
    description: `Web-based visualization of global weather conditions using animated wind data and map projections. Uses GFS data, SVG and HTML5 Canvas, runs in the browser.`,
    link: "https://github.com/SergioSediq/global-weather-visualisation",
    images: [
      "/assets/projects-screenshots/weather-viz/landing.png",
    ],
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
