import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

function Hero() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="containe-r">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-primary">
              <Image
                src="/logo-squre.png"
                alt="John Doe"
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none"></div>
          </div>
          <h1 className="text-4xl font-bold mb-6">Darawan Omar</h1>
          <p className="text-xl mb-8">Full Stack Web Developer</p>
          <p className="mb-8">
            I'm passionate about creating beautiful, functional, and
            user-friendly websites. With expertise in both front-end and
            back-end technologies, I bring ideas to life through code.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon">
              <Link href="https://github.com/DarawanOmar" target="_blank">
                <GithubIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon">
              <Link
                href="https://www.linkedin.com/in/dara-it-1185852a7"
                target="_blank"
              >
                <LinkedinIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
