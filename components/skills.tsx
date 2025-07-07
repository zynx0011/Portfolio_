"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: "☁️",
      skills: [
        { name: "AWS EC2", level: 85, description: "Instance management, auto-scaling, load balancing" },
        { name: "AWS S3", level: 90, description: "Object storage, static website hosting, data backup" },
        { name: "AWS Lambda", level: 80, description: "Serverless computing, event-driven architecture" },
        { name: "AWS VPC", level: 85, description: "Network configuration, security groups, subnets" },
        { name: "AWS IAM", level: 88, description: "Identity management, policies, role-based access" },
        { name: "AWS EKS", level: 82, description: "Managed Kubernetes service, cluster management" },
        { name: "AWS ECS", level: 78, description: "Container orchestration, task definitions" },
        { name: "CloudWatch", level: 85, description: "Monitoring, logging, alerting, dashboards" },
        { name: "CloudTrail", level: 80, description: "API logging, compliance, security auditing" },
      ],
    },
    {
      title: "Containerization & Orchestration",
      icon: "🐳",
      skills: [
        { name: "Docker", level: 90, description: "Container creation, multi-stage builds, optimization" },
        { name: "Kubernetes", level: 85, description: "Pod management, services, deployments, scaling" },
        { name: "Helm", level: 82, description: "Package management, chart creation, templating" },
        { name: "Kustomize", level: 78, description: "Configuration management, overlays, patches" },
        { name: "Minikube", level: 85, description: "Local development, testing, cluster simulation" },
      ],
    },
    {
      title: "CI/CD & DevOps Tools",
      icon: "🔄",
      skills: [
        { name: "Jenkins", level: 85, description: "Pipeline creation, automation, plugin management" },
        { name: "ArgoCD", level: 88, description: "GitOps workflows, continuous deployment, sync policies" },
        { name: "GitOps", level: 85, description: "Git-based deployment, version control, automation" },
        { name: "CI/CD Pipelines", level: 87, description: "Build automation, testing, deployment strategies" },
      ],
    },
    {
      title: "Infrastructure as Code",
      icon: "🏗️",
      skills: [
        { name: "Terraform", level: 83, description: "Infrastructure provisioning, state management, modules" },
        { name: "AWS CloudFormation", level: 80, description: "Stack management, template creation, updates" },
        { name: "Helm Charts", level: 82, description: "Kubernetes application packaging, versioning" },
      ],
    },
    {
      title: "Monitoring & Logging",
      icon: "📊",
      skills: [
        { name: "Prometheus", level: 85, description: "Metrics collection, alerting rules, PromQL queries" },
        { name: "Grafana", level: 88, description: "Dashboard creation, visualization, data sources" },
        { name: "Real-time Metrics", level: 83, description: "Performance monitoring, system observability" },
      ],
    },
    {
      title: "Programming & Scripting",
      icon: "💻",
      skills: [
        { name: "Bash", level: 85, description: "Shell scripting, automation, system administration" },
        { name: "Python", level: 80, description: "Automation scripts, API integration, data processing" },
        { name: "JavaScript", level: 78, description: "Frontend development, Node.js, API development" },
        { name: "React", level: 82, description: "Component development, state management, hooks" },
        { name: "Node.js", level: 80, description: "Backend development, REST APIs, microservices" },
      ],
    },
  ]

  const topSkills = [
    { name: "AWS", level: 85, category: "Cloud" },
    { name: "Docker", level: 90, category: "Containerization" },
    { name: "Kubernetes", level: 85, category: "Orchestration" },
    { name: "Jenkins", level: 85, category: "CI/CD" },
    { name: "ArgoCD", level: 88, category: "GitOps" },
    { name: "Terraform", level: 83, category: "IaC" },
    { name: "Prometheus", level: 85, category: "Monitoring" },
    { name: "Grafana", level: 88, category: "Visualization" },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for modern DevOps practices and cloud-native development
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="overview">Skills Overview</TabsTrigger>
            <TabsTrigger value="detailed">Detailed Breakdown</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Top Skills with Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>🚀</span>
                  Core Competencies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {topSkills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <Badge variant="outline">{skill.category}</Badge>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                      <div className="text-sm text-muted-foreground text-right">{skill.level}%</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="text-2xl">{category.icon}</span>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="detailed" className="space-y-6">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="space-y-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-1.5" />
                        <p className="text-xs text-muted-foreground">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Skill Tooltip */}
        {hoveredSkill && (
          <div className="fixed bottom-4 right-4 bg-popover border rounded-lg p-3 shadow-lg z-50 max-w-xs">
            <p className="text-sm">
              {skillCategories.flatMap((cat) => cat.skills).find((skill) => skill.name === hoveredSkill)?.description}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
