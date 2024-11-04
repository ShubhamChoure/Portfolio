"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Rows3, Star, Code } from "lucide-react";
import Footer from "@/components/Footer";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Intro from "@/components/Intro";
import Hero from "@/components/Hero";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

async function fetchGitHubRepos(username) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const repos = await response.json();

    const processedRepos = await Promise.all(
      repos.map(async (repo) => {
        const imageUrl = `https://raw.githubusercontent.com/${username}/${repo.name}/master/repo.png`;
        const imageExists = await checkImageExists(imageUrl);

        return {
          name: repo.name,
          description: repo.description || "No description provided",
          url: repo.html_url,
          stars: repo.stargazers_count,
          language: repo.language,
          updatedAt: new Date(repo.updated_at).toLocaleDateString(),
          imageUrl: imageExists ? imageUrl : null,
        };
      })
    );

    return processedRepos;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

async function checkImageExists(url) {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch (error) {
    console.error("Error checking image:", error);
    return false;
  }
}

export default function Home() {
  const logoRef = useRef(null);
  const navTextRef = useRef(null);
  const projectsRef = useRef(null);
  const isNavTxtInView = useInView(navTextRef);
  const isLogoInView = useInView(logoRef);
  const isProjectsInView = useInView(projectsRef, { amount: 0.2 });
  const teamRef =useRef(null);
  const isTeamInView = useInView(teamRef , {amount:0.2});
  const staggerDelay = 0.2;
  const staggerDelayTeam = 0.2;
  const [projects, setProjects] = useState([]);
  const [hackathonData, setHackathonData] = useState([]);
  const hackathonRef = useRef(null);
  const isHackathonInView = useInView(hackathonRef, { amount: 0.2 });
  useEffect(() => {
    const username = "ShubhamChoure";
    fetchGitHubRepos(username).then(setProjects);
    setHackathonData([
      {
        Title: "Code Lite 2024",
        Desc: "Participated in CodeLite 2024, organized by PDEA College of Engineering, under the Open Innovation track. Developed a tool and platform empowering developers to showcase, share, and monetize UI components. Focused on ease of collaboration, customization, and monetization for developers.",
        Post: "https://www.linkedin.com/posts/shubham-choure-01a6b6287_hackathon-innovation-developers-activity-7255399763116752896-cFTF?utm_source=share&utm_medium=member_desktop",
        Img: "/codelite.jpg",
        Done: true,
      },
      {
        Title: "Upcoming Hackathon",
        Desc: "Eagerly looking forward to the next hackathon adventure! Another opportunity to learn, collaborate, and innovate awaits. Stay tuned for updates as more details become available!",
        Img: "/ph.jpg",
        Post: false,
        Done: false,
      },
      {
        Title: "Future Event",
        Desc: "Exciting hackathon events are on the horizon! I’ll be sharing updates soon about my next coding journey. Keep an eye out for fresh challenges and ideas!",
        Img: "/ph.jpg",
        Post: false,
        Done: false,
      },
    ]);
  }, []);

  return (
    <div className="overflow-x-hidden overflow-y-scroll h-screen w-screen">
      <Intro/>
      <motion.div className="bg-gray-200 w-full pb-20">
        <nav className="flex justify-between items-center h-16 w-full px-2 md:px-20 py-2 bg-white sticky z-30 top-0">
          <motion.div
            className="logo text-xl text-black font-extrabold text-center h-fit"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: isLogoInView ? 1 : 0,
              scale: isLogoInView ? 1 : 0.6,
            }}
            transition={{ duration: 0.5 }}
            ref={logoRef}
          >
            <span className="text-green-400">&lt;</span>Dev
            <span className="text-green-400">Folio/&gt;</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: isNavTxtInView ? 1 : 0,
              x: isNavTxtInView ? 0 : 50,
            }}
            transition={{
              duration: 0.5,
            }}
            ref={navTextRef}
          >
            <motion.ul className="flex flex-row justify-between gap-10 font-semibold hidden md:flex">
              <a href="#about">
              <motion.li
                animate={{ y: isNavTxtInView ? 0 : 30 }}
                transition={{ delay: staggerDelay }}
              >
                About
              </motion.li>
              </a>
              <a href="#projects">
              <motion.li
                animate={{ y: isNavTxtInView ? 0 : 30 }}
                transition={{ delay: staggerDelay * 2 }}
              >
                Projects
              </motion.li>
              </a>
              <a href="#hackathons">
              <motion.li
                animate={{ y: isNavTxtInView ? 0 : 30 }}
                transition={{ delay: staggerDelay * 3 }}
              >
                Hackathons
              </motion.li>
              </a>
              <a href="#team">
              <motion.li
                animate={{ y: isNavTxtInView ? 0 : 30 }}
                transition={{ delay: staggerDelay * 4 }}
              >
                Team
              </motion.li>
              </a>
              <a href="#contact">
              <motion.li
                animate={{ y: isNavTxtInView ? 0 : 30 }}
                transition={{ delay: staggerDelay * 5 }}
              >
                Contact
              </motion.li>
              </a>
            </motion.ul>
          </motion.div>
          <Sheet>
            <SheetTrigger className="inline-block md:hidden">
              <Rows3 />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col gap-4 font-semibold">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#hackathons">Hackathons</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </nav>
        <Hero />
        <motion.div
          className="bg-transparent py-16"
          ref={projectsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: isProjectsInView ? 1 : 0,
            y: isProjectsInView ? 0 : 50,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4" id="projects">
            <h2 className="text-3xl font-bold mb-14 text-start">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isProjectsInView ? 1 : 0,
                    y: isProjectsInView ? 0 : 20,
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-white h-full flex flex-col">
                    <CardContent className="flex">
                      {project.imageUrl && (
                        <div className="relative w-full h-48 mt-5">
                          <Image
                            src={project.imageUrl}
                            alt={`${project.name} preview`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                          />
                        </div>
                      )}
                    </CardContent>
                    <CardHeader>
                      <CardTitle>{project.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription>{project.description}</CardDescription>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <Code className="mr-2" size={16} />
                        <span>{project.language || "Not specified"}</span>
                      </div>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <Star className="mr-2" size={16} />
                        <span>{project.stars} stars</span>
                      </div>
                      <div className="mt-2 text-sm text-gray-500">
                        Updated on {project.updatedAt}
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-row gap-2">
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <Button asChild>
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View on GitHub
                          </a>
                        </Button>
                      </motion.div>
                      {project.name === "CosmicFileTransfer" && (
                        <motion.div
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.8 }}
                        >
                          <Button asChild>
                            <a
                              href="https://cosmicft.vercel.app"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Visit Website
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center items-center bg-white py-10" id="hackathons">
          <motion.div
            ref={hackathonRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: isHackathonInView ? 1 : 0,
              y: isHackathonInView ? 0 : 50,
            }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center bg-white py-10"
          >
            <div className="container px-4">
              <h2 className="text-3xl font-bold mb-8">Hackathons</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {hackathonData &&
                  hackathonData.map((data, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: isHackathonInView ? 1 : 0,
                        y: isHackathonInView ? 0 : 20,
                      }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="h-full"
                    >
                      <Card className="bg-gray-200 text-black h-full flex flex-col">
                        <CardHeader>
                          <CardTitle>{data.Title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col flex-grow">
                          <div className="relative w-full h-48 mb-4">
                            <Image
                              src={data.Img}
                              alt={`${data.Title} preview`}
                              layout="fill"
                              objectFit="cover"
                              className="rounded-md"
                            />
                          </div>
                          <CardDescription className="text-gray-800 flex-grow">
                            {data.Desc}
                          </CardDescription>
                        </CardContent>
                        <CardFooter className=" mt-auto">
                          {data.Post && (
                            <motion.div
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.8 }}
                              className=" w-full"
                            >
                              <a href={data.Post} target="_blank">
                                <Button className="w-full ">View Post</Button>
                              </a>
                            </motion.div>
                          )}
                          {!data.Post && (
                            <Button className="w-full ">Update Soon</Button>
                          )}
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div className="container flex flex-col justify-center items-center bg-transparent py-10 px-10" id="team" ref={teamRef}>
         <motion.div className="w-full">
         <motion.h2 className="text-3xl font-bold mb-8 text-start"
         initial={{y:10,opacity:0}}
         animate={{y:isTeamInView?0:10,opacity:isTeamInView?1:0}}
         transition={{duration:0.5,delay:staggerDelayTeam}}
         >Meet The Team</motion.h2>
         </motion.div>
         <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-60">
                  <motion.div className=" flex flex-col justify-center items-center gap-1"
                  initial={{y:10,opacity:0}}
                  animate={{y:isTeamInView?0:10,opacity:isTeamInView?1:0}}
                  transition={{duration:0.5,delay:staggerDelayTeam*2}}
                  >
                    <div className="relative h-28 w-28">
                    <Image
                              src="/anandi.jpg"
                              alt="Anandi"
                              layout="fill"
                              objectFit="cover"
                              className="rounded-full"
                            />
                    </div>
                    <motion.h3 className=" font-semibold">Anandi Bhosale</motion.h3>
                    <motion.div className=" text-sm">Frontend Developer</motion.div>
                  </motion.div>
                  <motion.div className=" flex flex-col justify-center items-center gap-1"
                  initial={{y:10,opacity:0}}
                  animate={{y:isTeamInView?0:10,opacity:isTeamInView?1:0}}
                  transition={{duration:0.5,delay:staggerDelayTeam*3}}
                  >
                    <div className="relative h-28 w-28">
                    <Image
                              src="/sairaj.jpg"
                              alt="Sairaj"
                              layout="fill"
                              objectFit="cover"
                              className="rounded-full"
                            />
                    </div>
                    <motion.h3 className=" font-semibold">Sairaj Jawalikar</motion.h3>
                    <motion.div className=" text-sm">AI/ML Backend Developer</motion.div>
                  </motion.div>
                  <motion.div className=" flex flex-col justify-center items-center gap-1"
                  initial={{y:10,opacity:0}}
                  animate={{y:isTeamInView?0:10,opacity:isTeamInView?1:0}}
                  transition={{duration:0.5,delay:staggerDelayTeam*4}}
                  >
                    <div className="relative h-28 w-28">
                    <Image
                              src="/selfie.jpeg"
                              alt="Shubham"
                              layout="fill"
                              objectFit="cover"
                              className="rounded-full"
                            />
                    </div>
                    <motion.h3 className=" font-semibold">Shubham Choure</motion.h3>
                    <motion.div className=" text-sm">Fullstack Developer</motion.div>
                  </motion.div>
         </motion.div>
        </motion.div>
      </motion.div>
      <Footer/>
    </div>
  );
}
