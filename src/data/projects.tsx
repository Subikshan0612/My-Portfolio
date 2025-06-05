import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import {
  ArrowDownUpIcon,
  ArrowUpRight,
  ExternalLink,
  Link2,
  MoveUpRight,
} from "lucide-react";
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
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
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
      )}
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
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java" />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
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
  live?: string;
};
const projects: Project[] = [
  {
    // 01. Healthcare App (In Progress)
    id: "Healthcare App",
    category: "Healthcare App",
    title: "My Healthcare App",
    src: "/assets/projects-screenshots/Subikshanprojects/DoctorSelection.png",
    screenshots: [
      "/assets/projects-screenshots/Subikshanprojects/DoctorSelection.png",
    ],
    github: "https://github.com/Subikshan0612/Healthcare-App-main.git",
    skills: {
      frontend: [
        PROJECT_SKILLS.react, // React.js
        PROJECT_SKILLS.js, // JavaScript (or you can use PROJECT_SKILLS.ts for TypeScript)
        PROJECT_SKILLS.html, // HTML5
        PROJECT_SKILLS.css, // CSS3
        PROJECT_SKILLS.bootstrap, // Bootstrap (or you can use PROJECT_SKILLS.tailwind for Tailwind CSS)
      ],
      backend: [
        PROJECT_SKILLS.node, // Node.js
        PROJECT_SKILLS.express, // Express.js
        PROJECT_SKILLS.mongo, // MongoDB
        PROJECT_SKILLS.js, // JavaScript for backend
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Healthcare Appointment System
          </TypographyH3>
          <p className="font-mono mb-2">
            Developed a comprehensive healthcare appointment booking platform
            with a user-friendly interface. The system allows patients to easily
            schedule appointments with their preferred doctors and receive
            instant confirmation.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Subikshanprojects/DoctorSelection.png`,
              `${BASE_PATH}/Subikshanprojects/AppointmentBooking.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Secure Authentication</TypographyH3>
          <p className="font-mono mb-2">
            Implemented OAuth integration for secure and seamless
            authentication, allowing users to sign in with their Google,
            Facebook, or Apple accounts while maintaining data privacy and
            security.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/Subikshanprojects/SignUp&In.png`]}
          />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>

          <p className="font-mono mb-2">
            The platform includes appointment scheduling, doctor selection,
            real-time availability checking, and automated email confirmations
            to enhance the patient experience.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Subikshanprojects/AppointmentBooking.png`,
              `${BASE_PATH}/Subikshanprojects/AppointmentPreview.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This Healthcare App streamlines the patient-doctor connection while
            ensuring a secure, efficient booking experience.
          </p>
        </div>
      );
    },
  },
  {
    // 02. Matrimonial Software
    id: "Matchmaking Pro",
    category: "Matrimonial Software",
    title: "Matchmaking Pro",
    src: "/assets/projects-screenshots/Subikshanprojects/Mp-Dashboard.png",
    screenshots: [
      "/assets/projects-screenshots/Subikshanprojects/MP-Dashboard.png",
    ],
    github: "https://github.com/Subikshan0612/Matrimonial-Software.git",
    skills: {
      frontend: [
        PROJECT_SKILLS.react, // React.js
        PROJECT_SKILLS.js, // JavaScript (or you can use PROJECT_SKILLS.ts for TypeScript)
        PROJECT_SKILLS.html, // HTML5
        PROJECT_SKILLS.css, // CSS3
        PROJECT_SKILLS.bootstrap, // Bootstrap (or you can use PROJECT_SKILLS.tailwind for Tailwind CSS)
      ],
      backend: [
        PROJECT_SKILLS.node, // Node.js
        PROJECT_SKILLS.express, // Express.js
        PROJECT_SKILLS.mongo, // MongoDB
        PROJECT_SKILLS.js, // JavaScript for backend
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital showcase of a revolutionary matchmaking
            platform that&apos;s currently in development.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Intelligent Matchmaking Platform
          </TypographyH3>
          <p className="font-mono mb-2">
            This matrimonial software goes beyond traditional matching by
            incorporating advanced algorithms and personalized support. Each
            profile is carefully curated to ensure meaningful connections, with
            dedicated call support to guide users through their matchmaking
            journey.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Subikshanprojects/MP-Dashboard.png`,
              `${BASE_PATH}/Subikshanprojects/ProfileView.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Personalized Support</TypographyH3>
          <p className="font-mono mb-2">
            Our dedicated call support team provides personalized assistance to
            users, helping them navigate profiles and find their perfect match.
            All interactions are recorded for quality assurance and future
            reference.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/Subikshanprojects/CallRecording.png`]}
          />
                    <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>

          <p className="font-mono mb-2">
            Comprehensive user profiles, real-time status updates, call
            recording functionality, and an intuitive dashboard make this
            platform stand out in the matrimonial software market.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Subikshanprojects/MP-Dashboard.png`,
              `${BASE_PATH}/Subikshanprojects/LiveStatus.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This platform isn&apos;t just a matrimonial service — it&apos;s a
            complete matchmaking ecosystem designed to create meaningful
            connections.
          </p>
        </div>
      );
    },
  },
  {
    // 03. Portfolio project
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/Subikshanprojects/LandingPage.png",
    screenshots: [
      "/assets/projects-screenshots/Subikshanprojects/LandingPage.png",
    ],
    live: "https://www.abhijitzende.com/",
    github: "https://github.com/Subikshan0612/Subikshan-Ramachandran",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Subikshanprojects/LandingPage.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/myportfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Subikshanprojects/Projects.png`,
              `${BASE_PATH}/Subikshanprojects/ProjectView.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
  {
    // 04. Portfolio project
    id: "MacOs portfolio",
    category: "Portfolio",
    title: "MacOs Theme Portfolio",
    src: "/assets/projects-screenshots/Subikshanprojects/MacOsLandingPage.png",
    screenshots: [
      "/assets/projects-screenshots/Subikshanprojects/MacOsLandingPage.png",
    ],
    live: "https://subikshan-mac-os-portfolio.vercel.app/",
    github: "https://github.com/Subikshan0612/Subikshan-MacOs-Portfolio.git",
    skills: {
      frontend: [
        PROJECT_SKILLS.react, // React.js
        PROJECT_SKILLS.js, // JavaScript (or you can use PROJECT_SKILLS.ts for TypeScript)
        PROJECT_SKILLS.html, // HTML5
        PROJECT_SKILLS.css, // CSS3
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Experience my portfolio like never before - a fully interactive MacOS 
            desktop environment that brings familiar Apple aesthetics to the web.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Authentic MacOS Interface
          </TypographyH3>
          <p className="font-mono mb-2">
            Every pixel crafted to mirror the real MacOS experience. From the iconic 
            dock to the sleek window management system, navigate through my portfolio 
            just like you would on a Mac. Click, drag, minimize, and maximize windows 
            with that signature Apple smoothness.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Subikshanprojects/AboutPage.png`,
              `${BASE_PATH}/Subikshanprojects/ProjectSection.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Interactive Desktop Experience</TypographyH3>
          <p className="font-mono mb-2">
            Launch applications from the dock, use Spotlight search to find content, 
            and interact with multiple windows simultaneously. It&apos;s not just a 
            portfolio - it&apos;s a fully functional desktop OS in your browser.
          </p>
          <SlideShow images={[`${BASE_PATH}/Subikshanprojects/ProjectSection.png`]} />
          <TypographyH3 className="my-4 mt-8">Native MacOS Features</TypographyH3>

          <p className="font-mono mb-2">
            Complete with menu bar, system preferences, finder windows, and even 
            the trash can. Every interaction feels natural and intuitive, just 
            like using a real Mac. The attention to detail will make you forget 
            you&apos;re browsing a website.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/Subikshanprojects/ProjectSection.png`,
              `${BASE_PATH}/Subikshanprojects/ProjectOverview.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            Welcome to macOS - Portfolio Edition. Think different, browse different.
          </p>
        </div>
      );
    },
  },

];
export default projects;

