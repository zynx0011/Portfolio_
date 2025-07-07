"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Server,
  Cloud,
  GitBranch,
  Shield,
  Target,
  Heart,
  Lightbulb,
  Users,
  Code,
  Database,
} from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Cloud,
      title: "AWS Cloud Architecture",
      description:
        "Expert in designing scalable cloud solutions with EC2, EKS, Lambda, S3, and comprehensive AWS services",
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      icon: Server,
      title: "Kubernetes & Containerization",
      description:
        "Advanced container orchestration with Docker, Kubernetes, Helm, and microservices architecture",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: GitBranch,
      title: "CI/CD & GitOps",
      description:
        "Implementing robust pipelines with Jenkins, ArgoCD, and automated deployment strategies",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      icon: Shield,
      title: "DevSecOps & Monitoring",
      description:
        "Security-first approach with Prometheus, Grafana, and comprehensive observability solutions",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      icon: Code,
      title: "Infrastructure as Code",
      description:
        "Terraform, CloudFormation, and automated infrastructure provisioning and management",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    },
    {
      icon: Database,
      title: "Database & Storage",
      description:
        "Experience with MySQL, MongoDB, AWS RDS, DynamoDB, and data management solutions",
      color: "text-teal-500",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
    },
  ];

  const personalValues = [
    {
      icon: Target,
      title: "Goal-Oriented Professional",
      description:
        "Focused on delivering scalable, reliable infrastructure solutions that drive business success",
    },
    {
      icon: Heart,
      title: "Passionate Continuous Learner",
      description:
        "Constantly exploring cutting-edge technologies and DevOps methodologies to stay ahead",
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solver",
      description:
        "Innovative approach to complex infrastructure challenges and automation opportunities",
    },
    {
      icon: Users,
      title: "Collaborative Team Player",
      description:
        "Strong communication skills with experience in cross-functional team collaboration",
    },
  ];

  const interests = [
    "🚀 Space Technology & Innovation",
    "🤖 Artificial Intelligence & ML",
    "📚 Technical Writing & Blogging",
    "🎮 Gaming & Interactive Tech",
    "🏃‍♂️ Fitness & Wellness",
    "🎵 Music & Audio Technology",
    "📱 Mobile App Development",
    "🌱 Sustainable Technology",
    "🔬 Research & Development",
    "🎨 UI/UX Design Principles",
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-2xl font-semibold text-foreground">
              🎓 Computer Science Graduate & Cloud Engineering Specialist
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Recent graduate from{" "}
              <span className="font-semibold text-blue-600">
                G H Raisoni University
              </span>{" "}
              with exceptional academic performance (SGPA: 9.50/10). Specialized
              in cloud technologies, containerization, and DevOps practices with
              hands-on experience building production-ready infrastructure
              solutions.
            </p>
            <p className="text-lg text-muted-foreground">
              Passionate about creating automated, scalable, and secure systems
              that empower development teams to focus on innovation while
              ensuring robust, reliable infrastructure foundations.
            </p>
          </div>
        </div>

        {/* Technical Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/30 ${highlight.bgColor} animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-full ${highlight.bgColor} border`}
                  >
                    <highlight.icon
                      className={`h-8 w-8 ${highlight.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                  <CardTitle className="text-lg font-bold">
                    {highlight.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in-up">
            Core Values & Professional Approach
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalValues.map((value, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-lg mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Philosophy */}
        <div className="mb-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-2 border-primary/20">
            <CardContent className="pt-8">
              <blockquote className="text-2xl font-medium text-foreground mb-6 leading-relaxed">
                "Infrastructure is not just about servers and code—it's about
                creating reliable, scalable foundations that enable teams to
                innovate without limits while maintaining security and
                performance excellence."
              </blockquote>
              <cite className="text-primary font-bold text-lg">
                - Kunal Nachan
              </cite>
            </CardContent>
          </Card>
        </div>

        {/* Interests & Hobbies */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Interests & Passions Beyond Tech
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            When I'm not architecting cloud solutions or optimizing pipelines,
            you'll find me exploring:
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {interests.map((interest, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-base py-3 px-6 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-105 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700"
              >
                {interest}
              </Badge>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="pt-8">
              <h4 className="text-2xl font-bold mb-4">
                Ready to Build Something Amazing?
              </h4>
              <p className="text-muted-foreground mb-6">
                Let's discuss how my expertise in cloud infrastructure and
                DevOps can help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="outline" className="py-2 px-4">
                  Available for Full-time Opportunities
                </Badge>
                <Badge variant="outline" className="py-2 px-4">
                  Open to Consulting Projects
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
