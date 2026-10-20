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
  SiBackbonedotjs,
  SiChakraui,
  SiD3Dotjs,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiFlask,
  SiGithubactions,
  SiHelm,
  SiKubernetes,
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiRedis,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSpringboot,
  SiSupabase,
  SiSwift,
  SiTailwindcss,
  SiTerraform,
  SiThreedotjs,
  SiTypescript,
  SiVite,
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
  html5: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  d3: {
    title: "D3.js",
    bg: "black",
    fg: "white",
    icon: <SiD3Dotjs />,
  },
  backbone: {
    title: "Backbone.js",
    bg: "black",
    fg: "white",
    icon: <SiBackbonedotjs />,
  },
  django: {
    title: "Django",
    bg: "black",
    fg: "white",
    icon: <SiDjango />,
  },
  springboot: {
    title: "Spring Boot",
    bg: "black",
    fg: "white",
    icon: <SiSpringboot />,
  },
  redis: {
    title: "Redis",
    bg: "black",
    fg: "white",
    icon: <SiRedis />,
  },
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  terraform: {
    title: "Terraform",
    bg: "black",
    fg: "white",
    icon: <SiTerraform />,
  },
  kubernetes: {
    title: "Kubernetes",
    bg: "black",
    fg: "white",
    icon: <SiKubernetes />,
  },
  helm: {
    title: "Helm",
    bg: "black",
    fg: "white",
    icon: <SiHelm />,
  },
  githubActions: {
    title: "GitHub Actions",
    bg: "black",
    fg: "white",
    icon: <SiGithubactions />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  flask: {
    title: "Flask",
    bg: "black",
    fg: "white",
    icon: <SiFlask />,
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
    id: "eks-microservices",
    category: "Cloud / Kubernetes",
    title: "EKS Microservices",
    src: "/assets/projects-screenshots/eks-microservices/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.kubernetes,
        PROJECT_SKILLS.helm,
        PROJECT_SKILLS.githubActions,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://github.com/SergioSediq/kubernetes-eks-microservices",
    github: "https://github.com/SergioSediq/kubernetes-eks-microservices",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Deployed a microservices platform using AWS EKS, Helm, and GitHub Actions,
            resulting in 4 services autoscaling from 3 to 15 pods across 3 availability
            zones with rolling updates and centralized logging.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/eks-microservices/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "multi-tier-aws",
    category: "Cloud / Terraform",
    title: "Multi-Tier AWS App",
    src: "/assets/projects-screenshots/multi-tier-aws/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.terraform,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.githubActions,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "https://github.com/SergioSediq/multi-tier-aws-app",
    github: "https://github.com/SergioSediq/multi-tier-aws-app",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Provisioned a 3-tier web application using Terraform, Docker, and GitHub Actions,
            resulting in a load-balanced application tier of 3-10 instances and Multi-AZ
            PostgreSQL across 2 availability zones.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/multi-tier-aws/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "ai-devops-idp",
    category: "Cloud / DevOps",
    title: "AI DevOps IDP",
    src: "/assets/projects-screenshots/ai-devops-idp/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.react],
      backend: [
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.terraform,
        PROJECT_SKILLS.kubernetes,
      ],
    },
    live: "https://github.com/SergioSediq/ai-devops-idp",
    github: "https://github.com/SergioSediq/ai-devops-idp",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Developed an internal developer platform using FastAPI, Backstage, Terraform,
            AWS EKS, and Argo CD, resulting in diagnosis of failing pods, out-of-memory
            crashes, and image-pull errors, with runbook search in a developer portal.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/ai-devops-idp/landing.png`]} />
        </div>
      );
    },
  },
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
        PROJECT_SKILLS.d3,
      ],
      backend: [
        PROJECT_SKILLS.django,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.supabase,
      ],
    },
    live: "https://github.com/SergioSediq/on-orbit-collision-predictor",
    github: "https://github.com/SergioSediq/on-orbit-collision-predictor",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Built a collision-risk platform using Django, MATLAB, scikit-learn, and Next.js,
            resulting in ingestion of 58 close-approach warning fields into PostgreSQL prediction
            reports with role-based access and admin usage monitoring.
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
        PROJECT_SKILLS.springboot,
        PROJECT_SKILLS.flask,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            Built a virtual care platform using Next.js, Spring Boot, Flask, TensorFlow,
            and OpenAI, resulting in a sentiment model trained on 1.6M tweets at about
            94% accuracy for therapist chat.
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
];
export default projects;
