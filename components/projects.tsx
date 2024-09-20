import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      image: "/logo-squre.png",
    },
    {
      title: "Task Management App",
      description:
        "A React-based task manager with drag-and-drop functionality",
      image: "/logo-squre.png",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with Next.js and Tailwind CSS",
      image: "/logo-squre.png",
    },
  ];
  return (
    <section id="projects" className="py-20">
      <div className="containe-r">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 max-lg:gap-20 gap-8 mt-24">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-primary -mt-16 bg-background">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary">View Project</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
