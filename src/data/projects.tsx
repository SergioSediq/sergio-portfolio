import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiSwift,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  swiftui: {
    title: "SwiftUI",
    bg: "black",
    fg: "white",
    icon: <SiSwift />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "collision-predictor",
    category: "Space / ML",
    title: "On-Orbit Collision Predictor",
    src: "/assets/projects-screenshots/collision-predictor/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "https://github.com/SergioSediq/on-orbit-collision-predictor",
    github: "https://github.com/SergioSediq/on-orbit-collision-predictor",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Predict satellite collisions, protect space assets
          </TypographyP>
          <TypographyP className="font-mono ">
            ML-powered collision prediction system for space agencies. Monitor orbits in real-time,
            assess collision risks, and evaluate maneuvers. Analyse CDM data, calculate collision
            probabilities, and visualize orbital risks with Django, Next.js, and MATLAB.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <p className="font-mono mb-2">
            Satellite Data Explorer: comprehensive database of satellites in orbit with positions,
            velocities, and orbital parameters. Collision Probability Prediction: identify high-risk
            events and support decision-making for orbital maneuvers.
          </p>
          <SlideShow images={[`${BASE_PATH}/collision-predictor/landing.png`]} />
          <p className="font-mono mb-2 mt-4">
            Built with Django backend, Next.js frontend (D3 for 3D visualization), Python/scikit-learn
            for ML, MATLAB for calculations, and PostgreSQL on Supabase. Built for the Canadian Space Agency.
          </p>
        </div>
      );
    },
  },
  {
    id: "myhealthpal",
    category: "Healthcare",
    title: "MyHealthPal",
    src: "/assets/projects-screenshots/myhealthpal/landing.png",
    screenshots: ["landing.png"],
    live: "https://github.com/SergioSediq/MyHealthPal",
    github: "https://github.com/SergioSediq/MyHealthPal",
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            MyHealthPal is a unified, AI-powered health companion that combines
            a Next.js frontend, Spring Boot backend, and Flask-based AI service.
            It delivers intelligent medical guidance, empathetic mental health
            support, and local healthcare discovery.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Core features</TypographyH3>
          <p className="font-mono mb-2">
            Pal-Chat (voice-based therapy with sentiment-aware AI), Doctor Chat
            for symptom checking, text-to-speech, session history, health dashboard,
            medication reminders, and a local healthcare finder with map view.
          </p>
          <SlideShow images={[`${BASE_PATH}/myhealthpal/landing.png`]} />
          <p className="font-mono mb-2 mt-4">
            Built with Next.js 15, Spring Boot 3.4, Flask (Python), PostgreSQL,
            and optional Google Cloud APIs for vision and TTS. The AI service
            uses a fine-tuned sentiment model for more empathetic responses.
          </p>
        </div>
      );
    },
  },
  {
    id: "govlens",
    category: "Government / AI",
    title: "GovLens",
    src: "/assets/projects-screenshots/govlens/landing.png",
    screenshots: ["landing.png"],
    live: "https://github.com/SergioSediq/GovLens",
    github: "https://github.com/SergioSediq/GovLens",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            GovLens is an AI-powered government news curator. Aggregate agency
            releases, legislative updates, and trusted news into a single source
            of truth. Summaries, Q&A, and bias signals help teams act fast without losing rigor.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <p className="font-mono mb-2">
            LLM summaries, RAG Q&A, vector search, entity extraction, bias analysis.
            Live policy signal dashboard, daily briefings, and trusted source curation.
          </p>
          <SlideShow images={[`${BASE_PATH}/govlens/landing.png`]} />
          <p className="font-mono mb-2 mt-4">
            Built with Next.js, Node/Express, MongoDB, Redis, Google Gemini, Pinecone,
            LangChain. Deployed with Docker, AWS, Kubernetes, Terraform, and CI/CD.
          </p>
        </div>
      );
    },
  },
  {
    id: "chatify",
    category: "Real-time chat",
    title: "Chatify",
    src: "/assets/projects-screenshots/chatify/landing.png",
    screenshots: ["landing.png"],
    live: "https://github.com/SergioSediq/Chatify",
    github: "https://github.com/SergioSediq/Chatify",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.firebase,
      ],
      backend: [PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Chatify is a real-time web chat application built with Vite, React, TypeScript, and Firebase.
            The best place for messaging — free, fast, and secure. Clean UI with 1:1 and group conversations,
            replies, read receipts, emoji and reactions, and media sharing.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <p className="font-mono mb-2">
            Google Auth, real-time messaging (Firestore), thread replies, smart link detection, emoji picker and message reactions,
            read receipts, image and file uploads (Storage), tombstone-style deletion, light/dark theme, group management with admin controls.
          </p>
          <SlideShow images={[`${BASE_PATH}/chatify/landing.png`]} />
          <p className="font-mono mb-2 mt-4">
            Frontend: React 18, TypeScript, Vite, Zustand, Styled Components, Material UI. Backend: Firebase Auth, Firestore, Storage.
          </p>
        </div>
      );
    },
  },
  {
    id: "catchup",
    category: "iOS · Relationship assistant",
    title: "CatchUp",
    src: "/assets/projects-screenshots/catchup/landing.png",
    screenshots: ["landing.png"],
    live: "https://github.com/SergioSediq/CatchUp",
    github: "https://github.com/SergioSediq/CatchUp",
    skills: {
      frontend: [PROJECT_SKILLS.swiftui],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            CatchUp is a personal connection assistant for iPhone and iPad built with SwiftUI and SwiftData.
            Smart reminders, message suggestions, and conversation notes help you stay in touch with the people who matter.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <p className="font-mono mb-2">
            Contact management (from iOS Contacts), smart reminders (daily, weekly, monthly, custom), important dates (birthdays & anniversaries),
            &quot;last reached out&quot; tracking, message suggestions (check-in, gratitude, love notes), conversation notes, swipe &quot;Reached out&quot;, search, iCloud sync. Light/dark mode, no ads.
          </p>
          <SlideShow images={[`${BASE_PATH}/catchup/landing.png`]} />
          <p className="font-mono mb-2 mt-4">
            Tech: SwiftUI, SwiftData, Contacts framework, User Notifications, PhoneNumberKit. iOS 17+. Data stays on device (optional iCloud).
          </p>
        </div>
      );
    },
  },
  {
    id: "weather-viz",
    category: "Data visualization",
    title: "Global Weather Visualisation",
    src: "/assets/projects-screenshots/weather-viz/landing.png",
    screenshots: ["landing.png"],
    live: "https://global-weather-visualisation.vercel.app",
    github: "https://github.com/SergioSediq/global-weather-visualisation",
    skills: {
      frontend: [PROJECT_SKILLS.js],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A web-based project for visualizing global weather conditions using
            animated wind data and map projections. It uses weather forecast data
            from the Global Forecast System (GFS), combines SVG and HTML5 Canvas
            for rendering, and runs entirely in the browser.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/weather-viz/landing.png`]} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Visualizes global wind patterns on an interactive 3D-style world
              map with animated particles and color gradients for intensity.
            </li>
            <li className="font-mono">
              GFS data on a 1° grid, interpolated in the browser; layered
              rendering (SVG map + Canvas for particles and overlay).
            </li>
            <li className="font-mono">
              Deployed as a static site; inspired by wind map visualizations and
              built with JavaScript, HTML, and CSS.
            </li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;
