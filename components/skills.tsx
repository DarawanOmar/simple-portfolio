import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MenuIcon,
  Code2Icon,
  PaletteIcon,
  BrainCircuitIcon,
  AtomIcon,
  ServerIcon,
  DatabaseIcon,
  GitBranchIcon,
  TerminalIcon,
  WrapText,
} from "lucide-react";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiReactquery, SiShadcnui } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
function Skills() {
  const skills = [
    { name: "HTML", icon: <Code2Icon /> },
    { name: "CSS", icon: <PaletteIcon /> },
    { name: "Tailwindcss", icon: <RiTailwindCssFill size={25} /> },
    { name: "JavaScript", icon: <BrainCircuitIcon /> },
    { name: "React", icon: <AtomIcon /> },
    { name: "Nextjs", icon: <RiNextjsLine size={25} /> },
    { name: "Node.js", icon: <ServerIcon /> },
    { name: "Express", icon: <ServerIcon /> },
    { name: "Laravel", icon: <FaLaravel size={22} /> },
    { name: "Sql", icon: <DatabaseIcon /> },
    { name: "Git", icon: <GitBranchIcon /> },
    { name: "Shadcn", icon: <SiShadcnui /> },
    { name: "ReactQuery", icon: <SiReactquery size={25} /> },
  ];
  return (
    <section id="skills" className="py-20 bgmuted/50">
      <div className="containe-r">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="text-center group">
              <CardHeader>
                <div className="mx-auto mb-2 p-2 rounded-full bg-primary/10 transition-colors duration-300">
                  {skill.icon}
                </div>
                <CardTitle className="text-muted-foreground transition-colors duration-300">
                  {skill.name}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
