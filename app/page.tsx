"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, QrCode, X, Bot, User, ChevronDown, ChevronUp } from "lucide-react";
import { ExperienceItem } from "./components/ExperienceItem";
import { GithubGraph } from "./components/GithubGraph";
import { TechStack } from "./components/TechStack";
import { useState, useEffect } from "react";

import { QRCodeSVG } from "qrcode.react";
import { ThemeToggle } from "./components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { SiHuggingface } from "react-icons/si";

import { getMarkdownContent } from "./data/content";

export default function Home() {
  const [time, setTime] = useState<string>("");
  const [showQR, setShowQR] = useState(false);
  const [mode, setMode] = useState<"human" | "agent">("human");
  const [projectsExpanded, setProjectsExpanded] = useState(false);


  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const markdownContent = getMarkdownContent(time);

  return (
    <div className={`relative flex min-h-screen flex-col items-center bg-white dark:bg-black px-3 pt-16 text-black dark:text-white selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black pb-32 sm:px-4 sm:pt-24 sm:pb-40 overflow-x-hidden transition-colors duration-300`}>

      {/* Theme Toggle in Top Right */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <AnimatePresence mode="wait">
        {mode === "agent" ? (
          /* Agent Mode - Markdown View */
          <motion.main
            key="agent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex w-full max-w-2xl flex-col items-start text-left px-4 sm:px-0"
          >
            <pre
              className="w-full whitespace-pre-wrap font-mono text-sm leading-relaxed text-black dark:text-gray-300 selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black antialiased"
              style={{ fontFamily: '"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Console", monospace' }}
            >
              {markdownContent}
            </pre>
          </motion.main>
        ) : (
          /* Human Mode - Original View */
          <motion.main
            key="human"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex w-full max-w-2xl flex-col items-center text-center"
          >
            {/* Profile Image */}
            <div className="relative mb-2 h-40 w-40 sm:h-56 sm:w-56 overflow-hidden">
              <Image
                src="/profile.png"
                alt="Tenith Hasintha"
                fill
                className="object-cover scale-125"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-black dark:via-black/60 backdrop-blur-[1px]" />
            </div>

            {/* Hero Text */}
            <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl">
              Tenith Hasintha
            </h1>

            {/* Phonetic Pronunciation */}
            <div className="mb-8 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-400 dark:text-gray-500 sm:text-sm">
              <span>/ˈtɛnɪθ hɑːˈsɪntə/</span>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <span>engineer</span>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="tabular-nums text-xs sm:text-sm">{time || "00:00:00"}</span>
                  <span className="text-[10px] uppercase tracking-wider sm:text-xs">IST</span>
                </div>
              </div>
            </div>

            <div className="w-full space-y-4 text-left text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg md:text-xl">
              <p>
                a software engineer specializing in <strong>AI systems</strong> and <a href="https://en.wikipedia.org/wiki/Full-stack_developer" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-black dark:hover:text-white transition-colors">full-stack development</a>, with 4+ years building scalable python backends, agentic workflows, and real-time data systems.
              </p>
              <p>
                comfortable owning the <a href="https://en.wikipedia.org/wiki/Solution_stack" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-black dark:hover:text-white transition-colors">full stack</a> independently, shipping under pressure, and translating ambiguous product requirements into reliable, maintainable systems.
              </p>
            </div>


            {/* Experience Section */}
            <div className="mt-6 mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Experience
              </h2>
              <div className="space-y-12">
                <ExperienceItem
                  title="Lead Software Engineer – Full Stack & AI"
                  role="Metarune Labs (Pvt) Ltd · 2024 - Present"
                  collapsible={true}
                  link="https://www.metarunelabs.dev/"
                >
                  <div className="space-y-2">
                    <p>Leading the adoption of LLM integrations across multiple products and engineering real-time blockchain backends showcased at Token 2049 Singapore.</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>Architected <strong>agentic AI workflows</strong> and led AI-first transition using LangChain, LangGraph, MCP, and model fine-tuning via Unsloth and Hugging Face.</li>
                      <li>Engineered real-time NestJS backends on Bitcoin blockchain (Beatfarm &amp; Bitcoin Graffiti) with scalable parallel UTXO indexing and Socket.IO multi-user sync.</li>
                      <li>Mentored junior developers and led cross-functional teams with independent ownership from database architecture to production deployment.</li>
                    </ul>
                  </div>
                </ExperienceItem>

                <ExperienceItem
                  title="Junior Game Developer → Full-Stack Engineer"
                  role="Metarune Labs (Pvt) Ltd · 2022 - 2024"
                  collapsible={true}
                  link="https://www.metarunelabs.dev/"
                >
                  <div className="space-y-2">
                    <p>Grew from game development into full-stack engineering, shipping production products across gaming, Web3, and browser extension domains.</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>Architected Draftables a Unity American football manager game with custom MVCS architecture and Firebase integration.</li>
                      <li>Shipped Solidity/ThirdWeb smart contract features for in-game NFT mechanics, bridging gaming with decentralized tech.</li>
                      <li>Built the Ethos Chrome Extension a live X (Twitter) credibility-scoring tool using real-time DOM extraction and API orchestration.</li>
                    </ul>
                  </div>
                </ExperienceItem>

                <ExperienceItem
                  title="Technical 3D Artist / Developer"
                  role="Team Picaroon · 2021 - 2022"
                  collapsible={true}
                  link="http://www.picaroonteam.com"
                >
                  <div className="space-y-2">
                    <p>Owned the full creative pipeline from 3D modeling through to high-volume NFT asset rendering, while building automation tooling.</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>Built custom Python/Blender scripts for batch procedural NFT generation and automated After Effects compositing.</li>
                      <li>Managed complete art pipeline: 3D modeling, texturing, and final rendering for NFT collections.</li>
                    </ul>
                  </div>
                </ExperienceItem>
              </div>
            </div>


            {/* Key Projects Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Key Projects
              </h2>

              {/* Professional Projects */}
              <div className="mb-8">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-600">
                  Professional Metarune Labs
                </h3>
                <div className="space-y-8">
                  <ExperienceItem
                    title="Beatfarm & Bitcoin Graffiti"
                    role="TypeScript · NestJS · MongoDB · Socket.IO · Bitcoin"
                    collapsible={true}
                  >
                    <div className="space-y-2">
                      <p>Led backend development for a music marketplace and a collaborative pixel canvas built on the Bitcoin UTXO economy both showcased at Token 2049.</p>
                      <p>Engineered parallel indexing architecture to remove node bottlenecks with real-time canvas synchronization via PartyKit-style Socket.IO mechanism.</p>
                    </div>
                  </ExperienceItem>

                  <ExperienceItem
                    title="Draftables (Web3 Game)"
                    role="C# · Unity · Firebase · Solidity · ThirdWeb"
                    collapsible={true}
                  >
                    <div className="space-y-2">
                      <p>Architected an American Football manager game end-to-end with custom MVCS client architecture tailored for card-draw mechanics.</p>
                      <p>Integrated Firebase for state management alongside Solidity/ThirdWeb for in-game NFT asset ownership.</p>
                    </div>
                  </ExperienceItem>

                  <ExperienceItem
                    title="Ethos Chrome Extension"
                    role="TypeScript · Vite · DOM Scripting"
                    collapsible={true}
                  >
                    <p>Published Chrome extension that extracts DOM feed data to inject real-time, color-graded credibility scores directly into X (Twitter) profiles.</p>
                  </ExperienceItem>

                  <ExperienceItem
                    title="Interactive Engine (Scooby & Me)"
                    role="LLM-Powered · Runtime Generation"
                    collapsible={true}
                  >
                    <p>Interactive reading game powered by LLMs, dynamically generating context-aware comprehension questions mid-story at runtime.</p>
                  </ExperienceItem>
                </div>
              </div>

              {/* Independent & R&D Projects */}
              <div className={`relative transition-all duration-500 ${!projectsExpanded ? "max-h-64 overflow-hidden" : ""}`}>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-600">
                  Independent, Academic &amp; R&amp;D
                </h3>
                <div className="space-y-8">
                  <ExperienceItem
                    title="ToolboxLM (SaaS AI Platform)"
                    role="TypeScript · LangChain · Groq · Firebase"
                    collapsible={true}
                  >
                    <div className="space-y-2">
                      <p><strong>Major platform build:</strong> A SaaS platform allowing users to create, share, and monetize custom AI tools.</p>
                      <p>Engineered core LLM integrations using LangChain with Groq-hosted Llama inference and Firebase Vector Stores for <strong>complex RAG pipelines</strong> and efficient state management.</p>
                    </div>
                  </ExperienceItem>

                  <ExperienceItem
                    title="Endldell Runner"
                    role="React Three Fiber · Supabase · Vite"
                    collapsible={true}
                  >
                    <p>Immersive 3D racing PWA (iOS/Android) with companion admin dashboard for player management, question analytics, and leaderboard tracking.</p>
                  </ExperienceItem>

                  <ExperienceItem
                    title="IntelliDefect Analyzer"
                    role="Python · Flask · YOLOv8 · PyTorch · ESP32"
                    collapsible={true}
                  >
                    <div className="space-y-2">
                      <p>Multi-stage real-time industrial defect detection system (structural damage, lid presence, fill levels) using PyTorch/YOLOv8.</p>
                      <p>Flask API bridging the CV engine with a functional hardware prototype DC motor, L298 Driver, ESP32 actuator arm, and live Socket.IO analytics dashboard.</p>
                    </div>
                  </ExperienceItem>

                  <ExperienceItem
                    title="Easy Doctor"
                    role="Python · Flask · LangChain · GPT-3 · ESP32 · Next.js"
                    collapsible={true}
                  >
                    <div className="space-y-2">
                      <p>Smart medical system mapping a modular ESP32 biometric device (ECG, Temp, Blood Oxygen) with Next.js/Flask web architecture.</p>
                      <p>LangChain pipeline processing biometric data for motivational messages, targeted patient action plans, and structured clinical analysis.</p>
                    </div>
                  </ExperienceItem>

                  <ExperienceItem
                    title="Raspberry Pi Home Server"
                    role="Docker · CasaOS · Nginx · Portainer · n8n"
                    collapsible={true}
                  >
                    <p>24/7 self-hosted production ecosystem on Raspberry Pi 3B+ deep expertise in Docker Engine, Swarm, networking, port mapping, and volume management.</p>
                  </ExperienceItem>

                  <ExperienceItem
                    title="4-DOF Robotic Arm"
                    role="Arduino C · Python · Inverse Kinematics"
                    collapsible={true}
                  >
                    <p>Articulated robotic arm implementing inverse kinematics, mapping 3D coordinates to precise servo joint angles.</p>
                  </ExperienceItem>
                </div>

                {!projectsExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-black to-transparent" />
                )}
              </div>

              <button
                onClick={() => setProjectsExpanded(!projectsExpanded)}
                className="mt-3 flex items-center gap-1 text-xs font-medium text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors"
              >
                {projectsExpanded ? (
                  <>View Less <ChevronUp className="h-3 w-3" /></>
                ) : (
                  <>View All Projects <ChevronDown className="h-3 w-3" /></>
                )}
              </button>
            </div>


            {/* Open Source Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Open Source Contributions
              </h2>
              <div className="space-y-4">
                {[
                  { name: "ZeroClaw", desc: "Ultra-lightweight AI agent runtime" },
                  { name: "Lightpanda", desc: "Headless browser for machines" },
                  { name: "Unsloth", desc: "Framework for efficient LLM fine-tuning" },
                ].map((project) => (
                  <div key={project.name} className="group flex items-baseline gap-3 transition-all">
                    <span className="font-medium text-black dark:text-white">{project.name}</span>
                    <span className="text-sm text-gray-400 dark:text-gray-500">- {project.desc}</span>
                  </div>
                ))}
              </div>
            </div>


            {/* Education Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Education
              </h2>
              <div className="space-y-12">
                <ExperienceItem
                  title="University of Kelaniya"
                  role="Bachelor of Engineering Technology (Hons) Robotics & Automation"
                >
                  <p>2020 - 2023</p>
                </ExperienceItem>
                <ExperienceItem
                  title="ESOFT Metro Campus"
                  role="Diploma in Information Technology"
                >
                  <p>2015 - 2016</p>
                </ExperienceItem>
              </div>
            </div>

            {/* Contributions Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                GitHub Contributions
              </h2>
              <GithubGraph />
            </div>

            {/* Tech Stack Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Tech Stack
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                a generalist who builds across the full stack from python backends and ai pipelines to blockchain systems and embedded hardware:
              </p>
              <TechStack />
            </div>

            {/* References Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                References
              </h2>
              <div className="space-y-8">
                <div className="group border-l-2 border-gray-200 dark:border-gray-800 pl-6 transition-all hover:border-black dark:hover:border-white">
                  <div className="mb-2">
                    <span className="text-base font-semibold text-black dark:text-white">Bathiya Wickramage</span>
                    <span className="ml-2 text-xs font-medium text-gray-500 dark:text-gray-500">CEO - Metarune Labs Pvt Ltd</span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    <a href="mailto:bathiyaw@metarunelabs.dev" className="underline underline-offset-4 decoration-gray-300 dark:decoration-gray-700 hover:decoration-black dark:hover:decoration-white transition-colors">bathiyaw@metarunelabs.dev</a>
                  </p>
                </div>

                <div className="group border-l-2 border-gray-200 dark:border-gray-800 pl-6 transition-all hover:border-black dark:hover:border-white">
                  <div className="mb-2">
                    <span className="text-base font-semibold text-black dark:text-white">Nawodya Ishan</span>
                    <span className="ml-2 text-xs font-medium text-gray-500 dark:text-gray-500">Web 3.0 Lead Developer - Metarune Labs Pvt Ltd</span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    <a href="mailto:nawodyain@gmail.com" className="underline underline-offset-4 decoration-gray-300 dark:decoration-gray-700 hover:decoration-black dark:hover:decoration-white transition-colors">nawodyain@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>


            {/* Thing about me Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                About Me
              </h2>
              <div className="space-y-6">
                <p className="w-full text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  beyond shipping production systems, i&apos;m driven by the intersection of hardware and software from configuring raspberry pi servers to building robotic arms with inverse kinematics. i believe the best engineers understand systems at every layer.
                </p>
                <p className="w-full text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  whether it&apos;s fine-tuning llms with unsloth, engineering real-time blockchain backends, or wiring up esp32 biometric devices i&apos;m most alive when building things that push boundaries and solve real problems.
                </p>
              </div>
            </div>

            {/* Get in Touch Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  connect with me on{" "}
                  <a
                    href="https://www.linkedin.com/in/tenith-hasintha-807bb7219"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    linkedin
                  </a>{" "}
                  or{" "} shoot an{" "}
                  <a
                    href="mailto:hasintha199@gmail.com"
                    className="text-black dark:text-white underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    email
                  </a>
                </p>
              </div>
            </div>



          </motion.main>
        )}
      </AnimatePresence>

      {/* Glass Island Navbar */}
      <nav className="fixed bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-gray-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/80 px-4 py-3 shadow-sm backdrop-blur-md transition-all hover:bg-white/90 dark:hover:bg-zinc-900 sm:gap-6 sm:px-6">
        {/* Mode Toggle Switch */}
        <div className="flex items-center">
          <button
            onClick={() => setMode(mode === "human" ? "agent" : "human")}
            className="group relative flex h-7 w-12 cursor-pointer rounded-full bg-gray-200 dark:bg-zinc-700 p-1 transition-colors duration-200 ease-in-out hover:bg-gray-300 dark:hover:bg-zinc-600 focus:outline-none"
            role="switch"
            aria-checked={mode === "agent"}
            title={`Switch to ${mode === "human" ? "agent" : "human"} mode`}
          >
            <div
              className={`flex h-5 w-5 transform items-center justify-center rounded-full bg-white dark:bg-white shadow-sm transition duration-200 ease-in-out ${mode === "agent" ? "translate-x-5" : "translate-x-0"
                }`}
            >
              {mode === "human" ? (
                <User className="h-3 w-3 text-black" />
              ) : (
                <Bot className="h-3 w-3 text-black" />
              )}
            </div>
          </button>
        </div>
        <button
          onClick={() => setShowQR(true)}
          className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
          aria-label="Show QR Code"
        >
          <QrCode className="h-5 w-5" />
        </button>
        <div className="h-6 w-px bg-gray-200 dark:bg-zinc-700" />
        <a
          href="https://github.com/Tenith01"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/tenith-hasintha-807bb7219"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="https://huggingface.co/tenith"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
        >
          <SiHuggingface className="h-5 w-5" />
        </a>
        <a
          href="mailto:hasintha199@gmail.com"
          className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
        >
          <Mail className="h-5 w-5" />
        </a>
      </nav>

      {/* QR Code Modal */}
      {
        showQR && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/20 dark:bg-white/5 backdrop-blur-sm"
            onClick={() => setShowQR(false)}
          >
            <div
              className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowQR(false)}
                className="absolute -right-3 -top-3 rounded-full bg-black dark:bg-white p-2 text-white dark:text-black transition-transform hover:scale-110"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="rounded-lg bg-white p-2">
                <QRCodeSVG
                  value="https://tenith.me/"
                  size={200}
                  level="H"
                  includeMargin={false}
                />
              </div>
            </div>
          </div>
        )
      }
    </div >
  );
}
