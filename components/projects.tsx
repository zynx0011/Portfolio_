import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Users } from "lucide-react"

import Link from "next/link"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "NotesCraft – Full-Stack Notes App with Complete DevOps Pipeline",
      subtitle: "Production-Ready Application with Advanced DevOps Integration",
      description:
        "Comprehensive full-stack notes application showcasing modern web development integrated with enterprise-grade DevOps practices. Features separate CI and CD pipelines, GitOps workflows, and comprehensive monitoring stack.",
      longDescription:
        "This project demonstrates end-to-end application development and deployment using modern DevOps practices. Built with React frontend and Node.js backend, the application is containerized and deployed on Kubernetes with complete automation.",
      image: "/Notes.png",
      technologies: [
        "React",
        "Node.js",
        "Docker",
        "Kubernetes",
        "Helm",
        "Jenkins",
        "ArgoCD",
        "Prometheus",
        "Grafana",
      ],
      features: [
        "🔄 Separate CI and CD pipelines for modular DevOps control and flexibility",
        "📦 Custom Helm charts for Kubernetes deployment",
        "🚀 Jenkins CI pipelines for automated Docker builds and registry pushes",
        "🔄 ArgoCD GitOps continuous deployment with auto-sync capabilities",
        "⚡ Auto-scaling configuration based on CPU and memory utilization",
        "📊 Comprehensive monitoring with Prometheus and Grafana for real-time metrics",
        "🛡️ DevSecOps implementation with RBAC, Kubernetes Secrets, and Pod Security Policies",
        "🔍 Centralized logging with ELK stack for debugging and analysis",
      ],
      achievements: [
        "Reduced deployment time from 45 minutes to 3 minutes",
        "Achieved 99.9% uptime with automated health checks",
        "Implemented zero-downtime deployments with rolling updates",
        "Created reusable Helm templates for future projects",
      ],
      githubUrl: "https://github.com/zynx0011/note-app-cd.git",
      liveUrl: null,
      category: "Full-Stack DevOps",
      status: "Production Ready",
      complexity: "Advanced",
    },
    {
      title: "Microservices Deployment with GitOps and Service Mesh",
      subtitle: "Cloud-Native Architecture with Advanced Traffic Management",
      description:
        "Advanced microservices architecture deployed in Kubernetes with Istio service mesh, demonstrating production-grade cloud-native patterns, traffic management, and security policies.",
      longDescription:
        "This project showcases modern microservices deployment patterns using Kubernetes and Istio service mesh. Implements advanced traffic routing, security policies, and observability features typical of enterprise-grade applications.",
      image: "/Micro.png",
      technologies: ["Kubernetes", "Minikube", "ArgoCD", "Istio", "Docker", "Linux", "GitOps", "Prometheus", "Jaeger"],
      features: [
        "🏗️ Microservices architecture with independent services",
        "🔄 GitOps workflows using ArgoCD for version-controlled deployments",
        "🌐 Istio Service Mesh for advanced traffic routing and load balancing",
        "🔍 Service mesh observability with Kiali dashboard",
      ],  
      achievements: [
        "Implemented blue-green deployment strategy",
        "Achieved 50% reduction in service-to-service latency",
        "Created comprehensive service mesh security policies",
        "Established distributed tracing for all microservices",
      ],
      githubUrl: "https://github.com/zynx0011/Pipeline.git",
      liveUrl: null,
      category: "Microservices",
      status: "Production Ready",
      complexity: "Expert",
    },
    {
      title: "AWS Cloud Infrastructure Automation",
      subtitle: "Scalable Cloud Architecture with Infrastructure as Code",
      description:
        "Comprehensive AWS cloud infrastructure automation using Terraform, featuring multi-environment deployments, auto-scaling, and cost optimization strategies.",
      longDescription:
        "Enterprise-grade AWS infrastructure automation project demonstrating best practices in cloud architecture, security, and cost management using Infrastructure as Code principles.",
      image: "/Terraform.webp",
      technologies: ["AWS", "Terraform", "CloudFormation", "EC2", "VPC", "RDS", "S3", "IAM", "Auto Scaling", "CloudWatch"],
      features: [
        "☁️ Multi-tier AWS architecture with VPC, subnets, and security groups",
        "🏗️ Infrastructure as Code using Terraform with modular design",
        "📈 Auto-scaling groups with custom scaling policies",
        "🗄️ RDS database with automated backups and multi-AZ deployment",
        "🔐 IAM roles and policies following least privilege principle",
        "📊 CloudWatch monitoring with custom metrics and alarms",
        "💰 Cost optimization with reserved instances and spot instances",
        "🔄 CI/CD pipeline for infrastructure deployment and updates",
      ],
      achievements: [
        "Reduced infrastructure costs by 40% through optimization",
        "Achieved 99.99% availability with multi-AZ deployment",
        "Automated infrastructure provisioning reducing setup time by 80%",
      ],
      githubUrl: "https://github.com/zynx0011",
      liveUrl: null,
      category: "Cloud Infrastructure",
      status: "Production Ready",
      complexity: "Advanced",
    },
    {
      title: "Kubernetes Monitoring and Observability Stack",
      subtitle: "Comprehensive Monitoring Solution for Container Orchestration",
      description:
        "Complete monitoring and observability solution for Kubernetes clusters featuring Prometheus, Grafana, AlertManager, and custom dashboards for comprehensive system insights.",
      longDescription:
        "Production-grade monitoring stack providing complete visibility into Kubernetes cluster health, application performance, and infrastructure metrics with automated alerting and custom dashboards.",
      image: "/monitoring.png",
      technologies: [
        "Kubernetes",
        "Prometheus",
        "Grafana",
        "AlertManager",
      ],
      features: [
        "📊 Prometheus monitoring with custom metrics collection",
        "📈 Grafana dashboards for cluster and application monitoring",
        "🚨 AlertManager for intelligent alerting and notification routing",
        "⚡ Real-time performance monitoring and alerting",
      ],
      achievements: [
        "Reduced mean time to detection (MTTD) by 70%",
        "Implemented proactive alerting reducing downtime by 60%",
      ],
      githubUrl: "https://github.com/zynx0011/Monitoring-Dockerized-Microservice-with-Prometheus-Grafana-on-Kubernetes-via-Ansible.git",
      category: "Monitoring",
      status: "Production Ready",
      complexity: "Advanced",
    },
    {
      title: "CI/CD Pipeline with Jenkins, Ansible & Kubernetes",
      subtitle: "Zero-Cloud, Manual DevOps Pipeline from Scratch",
      description:
        "Built a fully automated CI/CD pipeline using Jenkins, Ansible, and Kubernetes — with zero dependency on cloud services or prebuilt images.",
      longDescription:
        "This project demonstrates a ground-up DevOps solution where every component was manually configured, including Dockerfile-based Jenkins and Ansible containers, SSH-based communication, and a fully automated deployment pipeline to a remote Kubernetes cluster. The entire flow — from GitHub trigger to Docker build, SCP-based transfer, image loading, and `kubectl apply` — was orchestrated using Jenkins Groovy pipelines and Ansible playbooks, showcasing full control over the CI/CD process without relying on cloud or automation shortcuts.",
      image: "/CICD.webp",
      technologies: [
        "Jenkins",
        "Ansible",
        "Docker",
        "Kubernetes",
        "GitHub",
        "SSH",
        "Groovy",
        "CI/CD",
        "kubectl"
      ],
      features: [
        "⚙️ Custom Jenkins and Ansible containers built from scratch using Dockerfiles",
        "🔐 SSH-based secure communication between Jenkins and Ansible",
        "🔁 CI/CD triggered via GitHub webhooks and scripted Jenkins pipeline",
        "🐳 Jenkins builds and saves Docker image as .tar archive",
        "📡 Image transferred to Ansible container using SCP",
        "📦 Ansible loads Docker image and automates deployment via kubectl",
        "☸️ Kubernetes deployment applied from remote via Ansible",
        "🧱 No cloud services used – pure self-managed infrastructure"
      ],
      achievements: [
        "Built and deployed a real-world CI/CD pipeline without cloud or registry dependency",
        "Integrated Jenkins, Docker, Ansible, and Kubernetes end-to-end",
        "Mastered raw DevOps toolchain with hands-on, bottom-up setup",
      ],
      githubUrl: "https://github.com/zynx0011/End-to-End-CI-CD-Pipeline-with-Jenkins-Ansible-Docker-and-Kubernetes.git",
      liveUrl: null,
      category: "CI/CD & Orchestration",
      status: "Production Ready",
      complexity: "Advanced"
    },
    
    {
      title: "Automated Docker Image Deployment with Jenkins & Ansible",
      subtitle: "Custom CI/CD Pipeline with Docker, Jenkins, SSH & Ansible",
      description:
        "Built a CI/CD pipeline from scratch that automates Docker image creation, transfer, and remote deployment using Jenkins, SCP, and Ansible — without using a Docker registry.",
      longDescription:
        "This hands-on DevOps project showcases a custom CI/CD pipeline that builds Docker images from source code using Jenkins, securely transfers them via SCP to a remote Ansible container, and deploys them using an automated Ansible playbook. The solution avoids Docker registries entirely by saving and loading `.tar` image files, while also emphasizing SSH-based automation and infrastructure-as-code practices. It demonstrates control over the full CI/CD lifecycle using only core Linux, Docker, and automation tools.",
      image: "/Docker.webp",
      technologies: [
        "Docker",
        "Jenkins",
        "Ansible",
        "GitHub",
        "SSH",
        "SCP",
        "CI/CD",
        "Groovy",
        "Linux"
      ],
      features: [
        "🐳 Jenkins builds Docker image from source using a custom Dockerfile",
        "📦 Docker image saved as .tar archive to avoid using Docker registry",
        "🔐 Secure SSH + SCP setup to transfer image to Ansible container",
        "⚙️ Jenkins Groovy pipeline automating the entire CI/CD flow",
        "🚀 Ansible playbook loads and runs Docker container on remote host",
        "🧪 End-to-end deployment automation without manual intervention",
        "📁 Custom setup without relying on prebuilt images",
        "🛠️ Demonstrates deep understanding of DevOps workflow mechanics"
      ],
      achievements: [
        "Created a fully automated pipeline without using Docker Hub or registries",
        "Learned to handle real-world constraints like SCP limitations with Docker",
        "Mastered integration between Jenkins, Ansible, and SSH-based deployments",
        "Built a reusable infrastructure-ready CI/CD setup for Docker workloads"
      ],
      githubUrl: "https://github.com/zynx0011/Pipeline-For-Docker-Automation.git",
      liveUrl: null,
      category: "DevOps Automation",
      status: "Project Complete",
      complexity: "Advanced"
    }
    


    
    
  ]
  // ].map((project) => ({
  //   ...project,
  //   image: "/demo-project.jpg",
  // }));

  const projectStats = [
    { label: "Total Projects", value: "20+", icon: "🚀" },
    { label: "Technologies Used", value: "15+", icon: "⚡" },
    { label: "GitHub Repositories", value: "20+", icon: "⭐" },
    { label: "Production Deployments", value: "10+", icon: "🌐" },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Real-world DevOps solutions demonstrating expertise in cloud infrastructure, automation, monitoring, and
            modern deployment practices. Each project showcases production-ready implementations with comprehensive
            documentation.
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-3xl mx-auto">
          {projectStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="pt-6">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            // Center the last card if not a multiple of 3
            const isLast = index === projects.length - 1;
            const needsCenter = projects.length % 3 !== 0 && isLast;
            return (
              <Card
                key={index}
                className={`flex flex-col h-full hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/40 bg-white/80 dark:bg-background/80 animate-fade-in-up${needsCenter ? ' lg:col-start-2' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-full h-48 overflow-hidden rounded-t-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={225}
                    className="rounded-lg w-full h-48 object-cover mb-4"
                  />
                </div>
                <CardContent className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground line-clamp-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                  <p className="text-muted-foreground text-sm mb-1 line-clamp-3">Features:</p>
                  <div className="flex flex-wrap gap-1 mb-4">{project.features.slice(0, 5).map((feature, index)=>{
                    return(
                      <Badge
                      key={index}
                      variant="secondary"
                      className="justify-start text-left w-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {feature}
                    </Badge>
                    
                    )
                  })}
                  </div>
                  <p className="text-muted-foreground text-sm mb-1 line-clamp-3">Achievements:</p>
                  <div className="flex flex-wrap gap-1 mb-4">{project.achievements.slice(0, 5).map((achievement, achievementIndex) => (
                    <p key={achievementIndex} className="text-muted-foreground text-left text-[12px] mb-0 line-clamp-3">🔹{achievement}</p>
                  ))}
                  </div>
                  <div className="mt-auto mb-6 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 10).map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default "
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                  <div className="mt-auto -mb-5  flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
              <p className="text-muted-foreground mb-6">
                These projects represent just a portion of my DevOps and cloud engineering experience. I&apos;m always
                working on new challenges and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="https://github.com/zynx0011">
                    <Github className="h-4 w-4 mr-2" />
                    View All Projects
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contact">
                    <Users className="h-4 w-4 mr-2" />
                    Let&apos;s Collaborate
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
