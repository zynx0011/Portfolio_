"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin,
  Calendar,
} from "lucide-react";
import Link from "next/link";

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Cloud Engineer",
    "DevOps Enthusiast",
    "Kubernetes Expert",
    "AWS Specialist",
    "GitOps Advocate",
    "Infrastructure Automation Expert",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-47 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* LinkedIn-style Banner as Background */}
      {/* <div className="absolute left-1/2 top-0 w-full max-w-3xl  -translate-x-1/2 z-10 flex flex-col items-center">
      
        <div className="w-full h-40 sm:h-48 md:h-56 rounded-b-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 shadow-lg flex items-center justify-center animate-gradient-shift">
          
          <span className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-center drop-shadow-lg opacity-90">
            "Success is not the key to happiness. <br />
             Happiness is the key to success."
          </span>
        

        </div>
      </div> */}
       <div className="absolute left-1/2 top-0 w-full max-w-3xl -translate-x-1/2 z-10 flex flex-col items-center">
    <div className="w-full h-40 sm:h-48 md:h-56 rounded-b-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 shadow-lg flex flex-col items-center justify-center animate-gradient-shift relative">
      {/* Quote Text */}
      <span className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-center drop-shadow-lg opacity-90 mb-2">
        &quot;Success is not the key to happiness. <br />
        Happiness is the key to success.&quot;
      </span>
      
      {/* Social Icons - Bottom Right of the banner */}
      <div className="flex justify-end space-x-2 absolute bottom-4 right-4 animate-fade-in-up">
        <Link
          href="https://github.com/kunalnachan"
          className="text-white/80 hover:text-white transition-all duration-300 hover:scale-125 group animate-float"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors hover:shadow-lg">
            <Github className="h-6 w-6" />
          </div>
          <span className="sr-only">GitHub</span>
        </Link>
        <Link
          href="https://linkedin.com/in/kunalnachan"
          className="text-white/80 hover:text-blue-200 transition-all duration-300 hover:scale-125 group animate-float"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="p-3 rounded-full bg-white/10 group-hover:bg-blue-100/20 transition-colors hover:shadow-lg">
            <Linkedin className="h-6 w-6" />
          </div>
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link
          href="mailto:kunalnachan10@gmail.com"
          className="text-white/80 hover:text-green-200 transition-all duration-300 hover:scale-125 group animate-float"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="p-3 rounded-full bg-white/10 group-hover:bg-green-100/20 transition-colors hover:shadow-lg">
            <Mail className="h-6 w-6" />
          </div>
          <span className="sr-only">Email</span>
        </Link>
      </div>
    </div>
  </div>

      {/* Enhanced Animated Background (below everything) */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 animate-gradient-shift bg-[length:400%_400%] z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse"></div>
      </div>

      {/* Floating Tech Icons */}
      <div
        className="absolute top-20 left-10 w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center animate-float"
        style={{ animationDelay: "1s" }}
      >
        <span className="text-2xl">☁️</span>
      </div>
      <div
        className="absolute top-40 right-20 w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center animate-float"
        style={{ animationDelay: "2s" }}
      >
        <span className="text-xl">🐳</span>
      </div>
      <div
        className="absolute bottom-32 left-20 w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        <span className="text-lg">⚡</span>
      </div>
      <div
        className="absolute top-60 right-40 w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center animate-float"
        style={{ animationDelay: "3s" }}
      >
        <span className="text-sm">🚀</span>
      </div>
      <div
        className="absolute top-40 left-40 w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center animate-float"
        style={{ animationDelay: "3s" }}
      >
        <span className="text-sm">🚀</span>
      </div>
      <div
        className="absolute top-100 left-10 w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center animate-float"
        style={{ animationDelay: "3s" }}
      >
        <span className="text-sm">☸️</span>
      </div>
      <div
        className="absolute top-60 left-50 w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center animate-float"
        style={{ animationDelay: "3s" }}
      >
        <span className="text-sm">🧑‍💻</span>
      </div>

      <div className="container mx-auto text-center relative z-20">
        <div className="max-w-5xl mx-auto">
          {/* Profile Section with User Photo over Banner */}
          <div className="mb-8 relative animate-scale-in flex flex-col items-center" style={{ marginTop: '2.5rem' }}>
            <div className="w-44 h-44 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 p-1 animate-glow shadow-2xl relative z-20" style={{ marginTop: '-5.5rem' }}>
              <img
                src="/ui/kunalnachan.jpg"
                alt="Kunal Nachan profile"
                className="w-full h-full object-cover rounded-full border-4 border-background shadow-lg"
                style={{ background: "#fff" }}
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 w-8 h-8 rounded-full border-4 border-background flex items-center justify-center animate-pulse z-30">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
          </div>

          {/* Location and Status */}
          <div className="flex items-center justify-center gap-90 mb-6 -mt-25 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-500" />
              <span>Pune, Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-green-500" />
              <span className="text-green-600 font-medium">Open to work</span>
            </div>
          </div>

          {/* Main Title with Animation */}
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 mt-12 animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
              Kunal Nachan
            </span>
            <div className="text-2xl sm:text-4xl mt-4 h-16 flex items-center justify-center">
              <span className="inline-block animate-fade-in-up text-primary font-semibold">
                {roles[currentRole]}
              </span>
            </div>
          </h1>

          {/* Enhanced Description */}
          <div
            className="text-xl text-muted-foreground mb-8 -mt-5 max-w-4xl mx-auto leading-relaxed space-y-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <p className="text-2xl font-semibold text-foreground">
              🚀 Passionate Cloud & DevOps Engineer
            </p>
            <p>
              Specializing in{" "}
              <span className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                AWS Cloud Solutions
              </span>
              ,
              <span className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                {" "}
                Kubernetes Orchestration
              </span>
              , and
              <span className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                {" "}
                GitOps Workflows
              </span>
            </p>
            <p className="text-lg">
              Building scalable infrastructure solutions, optimizing CI/CD
              pipelines, and implementing DevSecOps practices for enhanced
              system reliability and security.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center -mt-5 mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              className="group hover:scale-105 transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 animate-glow"
              asChild
            >
              <Link href="#contact">
                <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Let&apos;s Connect &amp; Collaborate
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group hover:scale-105 transition-all duration-300 border-2 hover:border-primary hover:bg-primary/10"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              <Link href="/ui/Kunal_Nachan_Resume.pdf" download>
              Download Resume
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center space-x-8 mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            <Link
              href="https://github.com/kunalnachan"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 group animate-float"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="p-3 rounded-full bg-muted/50 group-hover:bg-primary/10 transition-colors hover:shadow-lg">
                <Github className="h-8 w-8" />
              </div>
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/kunalnachan"
              className="text-muted-foreground hover:text-blue-600 transition-all duration-300 hover:scale-125 group animate-float"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="p-3 rounded-full bg-muted/50 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/20 transition-colors hover:shadow-lg">
                <Linkedin className="h-8 w-8" />
              </div>
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:kunalnachan10@gmail.com"
              className="text-muted-foreground hover:text-green-600 transition-all duration-300 hover:scale-125 group animate-float"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="p-3 rounded-full bg-muted/50 group-hover:bg-green-100 dark:group-hover:bg-green-900/20 transition-colors hover:shadow-lg">
                <Mail className="h-8 w-8" />
              </div>
              <span className="sr-only">Email</span>
            </Link>
          </div>

          {/* Enhanced Stats Grid */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "1.2s" }}
          >
            <div
              className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-float"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-sm text-muted-foreground font-medium">
                Projects Completed
              </div>
            </div>
            <div
              className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-float"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-3xl font-bold text-green-600 mb-2">4</div>
              <div className="text-sm text-muted-foreground font-medium">
                Certifications
              </div>
            </div>
            <div
              className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-float"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">9.1</div>
              <div className="text-sm text-muted-foreground font-medium">
                Academic CGPA
              </div>
            </div>
            <div
              className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-float"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="text-3xl font-bold text-orange-600 mb-2">3+</div>
              <div className="text-sm text-muted-foreground font-medium">
                Years Learning
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
