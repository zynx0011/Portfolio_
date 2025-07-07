import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Cloud & DevOps Engineering Projects",
      company: "Independent Projects & Learning",
      location: "Remote, India",
      period: "Jan 2023 - Present",
      type: "Project-Based Experience",
      description:
        "Developed comprehensive DevOps solutions through hands-on projects, implementing industry best practices for containerization, orchestration, and CI/CD automation. Built production-ready applications with complete infrastructure automation.",
      achievements: [
        "🚀 Built and deployed 20+ cloud-native applications with complete DevOps pipelines",
        "⚡ Implemented GitOps workflows using ArgoCD reducing deployment time by 80%",
        "🔧 Configured Istio Service Mesh for microservices traffic management and security",
        "📊 Set up comprehensive monitoring stack with Prometheus and Grafana for real-time observability",
        "🛡️ Achieved expertise in DevSecOps practices with RBAC, Pod Security Policies, and secret management",
        "☁️ Mastered AWS services including EC2, EKS, Lambda, S3, VPC, and IAM for scalable cloud solutions",
        "🐳 Containerized applications using Docker with multi-stage builds and optimization techniques",
      ],
      technologies: [
        "AWS",
        "Kubernetes",
        "Docker",
        "Jenkins",
        "ArgoCD",
        "Terraform",
        "Prometheus",
        "Grafana",
        "Istio",
        "Helm",
      ],
      highlights: [
        "Production-ready infrastructure automation",
        "GitOps implementation and best practices",
        "Microservices architecture and service mesh",
        "Comprehensive monitoring and observability",
      ],
    },
    {
      title: "DevOps & Cloud Technology Mastery",
      company: "KodeKloud Academy & Self-Directed Learning",
      location: "Online Learning Platform",
      period: "Jun 2022 - Dec 2023",
      type: "Intensive Learning & Certification",
      description:
        "Comprehensive learning journey in cloud technologies and DevOps practices through structured courses, hands-on labs, and real-world project implementations. Gained industry-recognized certifications and practical expertise.",
      achievements: [
        "🏆 Completed 4 professional certifications in Linux, Docker, Kubernetes, and Git/GitHub",
        "☁️ Mastered AWS cloud services with hands-on experience in 15+ core services",
        "🔧 Developed proficiency in Infrastructure as Code using Terraform and CloudFormation",
        "📚 Built strong foundation in Linux system administration and shell scripting",
        "🐳 Gained expertise in container technologies and orchestration platforms",
        "🔄 Implemented CI/CD pipelines using Jenkins and GitHub Actions",
        "📊 Learned monitoring and logging best practices with industry-standard tools",
      ],
      technologies: ["Linux", "Docker", "Kubernetes", "Git", "AWS", "Terraform", "Bash", "Python", "Jenkins"],
      highlights: [
        "Structured learning with hands-on labs",
        "Industry-recognized certifications",
        "Real-world project implementations",
        "Strong theoretical and practical foundation",
      ],
    },
    {
      title: "Academic Excellence & Research",
      company: "G H Raisoni University",
      location: "Maharashtra, India",
      period: "Aug 2020 - May 2024",
      type: "Bachelor of Technology - Computer Science",
      description:
        "Exceptional academic performance with SGPA of 9.50/10, focusing on software engineering, data structures, algorithms, and computer systems. Participated in technical projects and research activities.",
      achievements: [
        "🎓 Achieved outstanding SGPA of 9.50/10 demonstrating academic excellence",
        "💻 Completed major projects in web development, database management, and system design",
        "🔬 Participated in research activities related to cloud computing and distributed systems",
        "👥 Led technical teams in college projects and hackathons",
        "📚 Maintained consistent top performance throughout the degree program",
        "🏆 Received recognition for academic achievements and project innovations",
      ],
      technologies: [
        "Java",
        "Python",
        "JavaScript",
        "React",
        "Node.js",
        "MySQL",
        "MongoDB",
        "Data Structures",
        "Algorithms",
      ],
      highlights: [
        "Top academic performer",
        "Strong programming foundation",
        "Leadership in technical projects",
        "Research and innovation focus",
      ],
    },
  ]

  const skillsGained = [
    { skill: "Cloud Architecture", level: "Advanced", icon: "☁️" },
    { skill: "Container Orchestration", level: "Expert", icon: "🐳" },
    { skill: "CI/CD Automation", level: "Advanced", icon: "🔄" },
    { skill: "Infrastructure as Code", level: "Proficient", icon: "🏗️" },
    { skill: "Monitoring & Observability", level: "Advanced", icon: "📊" },
    { skill: "DevSecOps Practices", level: "Proficient", icon: "🛡️" },
  ]

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A comprehensive journey through hands-on DevOps projects, intensive learning, and academic excellence,
            building expertise in cloud-native technologies and infrastructure automation.
          </p>
        </div>

        {/* Skills Overview */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Core Competencies Developed</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {skillsGained.map((item, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-4 pb-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-semibold text-sm mb-1">{item.skill}</div>
                  <Badge variant="secondary" className="text-xs">
                    {item.level}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="flex flex-col h-full hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/40 bg-white/80 dark:bg-background/80 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="flex flex-col flex-1 p-6">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="text-lg font-bold text-foreground line-clamp-2">{exp.title}</span>
                  <Badge variant="outline" className="font-medium text-xs">{exp.type}</Badge>
                </div>
                <div className="text-primary font-semibold mb-1">{exp.company}</div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-2">
                  <span><CalendarDays className="inline h-4 w-4 mr-1" />{exp.period}</span>
                  <span><MapPin className="inline h-4 w-4 mr-1" />{exp.location}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-4">{exp.description}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {exp.technologies.slice(0, 6).map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
