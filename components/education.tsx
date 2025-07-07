import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Star, TrendingUp, BookOpen, Trophy } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Bachelor of Technology (B-Tech)",
      field: "Computer Science Engineering",
      institution: "G H Raisoni University",
      location: "Maharashtra, India",
      grade: "SGPA: 9.50 / 10",
      percentage: "95%",
      period: "2020 - 2024",
      description:
        "Exceptional academic performance with focus on software engineering, data structures, algorithms, and computer systems. Consistently ranked in top 5% of the class.",
      highlights: [
        "🏆 Top 5% academic performer throughout the program",
        "💻 Specialized in software engineering and system design",
        "🔬 Participated in research projects on cloud computing",
        "👥 Led multiple technical projects and team collaborations",
        "📚 Strong foundation in data structures, algorithms, and programming",
      ],
      subjects: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Management Systems",
        "Computer Networks",
        "Operating Systems",
        "Cloud Computing",
        "Web Technologies",
        "System Design",
      ],
    },
    {
      degree: "Diploma in Computer Science",
      field: "Computer Science & Engineering",
      institution: "Y B Polytechnic",
      location: "Maharashtra, India",
      grade: "CGPA: 7.8 / 10",
      percentage: "78%",
      period: "2017 - 2020",
      description:
        "Strong foundation in computer science fundamentals, programming concepts, and technical skills. Built solid groundwork for advanced studies.",
      highlights: [
        "💡 Developed strong programming fundamentals",
        "🔧 Hands-on experience with hardware and software",
        "📊 Consistent academic performance",
        "🎯 Focus on practical application of concepts",
        "🤝 Active participation in technical activities",
      ],
      subjects: [
        "Programming Fundamentals",
        "Computer Hardware",
        "Software Development",
        "Mathematics",
        "Electronics",
        "Technical Communication",
      ],
    },
  ]

  const certifications = [
    {
      name: "KodeKloud Linux Certification",
      issuer: "KodeKloud",
      date: "2023",
      description: "Comprehensive Linux system administration and command-line proficiency",
      skills: ["Linux Administration", "Shell Scripting", "System Management", "Command Line"],
      credentialId: "KK-LINUX-2023",
    },
    {
      name: "KodeKloud Docker Certification",
      issuer: "KodeKloud",
      date: "2023",
      description: "Container technology mastery including Docker fundamentals and advanced concepts",
      skills: ["Docker", "Containerization", "Image Management", "Docker Compose"],
      credentialId: "KK-DOCKER-2023",
    },
    {
      name: "KodeKloud Kubernetes Certification",
      issuer: "KodeKloud",
      date: "2023",
      description: "Kubernetes orchestration, cluster management, and cloud-native deployments",
      skills: ["Kubernetes", "Container Orchestration", "Cluster Management", "Cloud Native"],
      credentialId: "KK-K8S-2023",
    },
    {
      name: "Mastering Git & GitHub Training Program",
      issuer: "Professional Training Institute",
      date: "2022",
      description: "Advanced version control, collaboration workflows, and DevOps integration",
      skills: ["Git", "GitHub", "Version Control", "Collaboration", "DevOps"],
      credentialId: "GIT-MASTER-2022",
    },
  ]

  const academicAchievements = [
    {
      title: "Academic Excellence Award",
      description: "Recognized for outstanding SGPA of 9.50/10 in Computer Science",
      year: "2024",
      icon: Trophy,
    },
    {
      title: "Consistent High Performance",
      description: "Maintained top 5% ranking throughout the degree program",
      year: "2020-2024",
      icon: TrendingUp,
    },
    {
      title: "Technical Project Leadership",
      description: "Led multiple successful technical projects and team collaborations",
      year: "2022-2024",
      icon: Star,
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Strong academic foundation combined with industry-recognized certifications in cloud and DevOps
            technologies, demonstrating both theoretical knowledge and practical expertise.
          </p>
        </div>

        {/* Academic Achievements Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {academicAchievements.map((achievement, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                <Badge variant="secondary">{achievement.year}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="h-10 w-10 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                    <div className="text-lg font-semibold text-primary mb-1">{edu.field}</div>
                    <div className="text-muted-foreground font-medium">{edu.institution}</div>
                    <div className="text-sm text-muted-foreground">{edu.location}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                  <div className="flex gap-2">
                    <Badge variant="default" className="bg-green-600">
                      {edu.grade}
                    </Badge>
                    <Badge variant="outline">{edu.percentage}</Badge>
                  </div>
                  <Badge variant="secondary">{edu.period}</Badge>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{edu.description}</p>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Highlights:</h4>
                  <div className="space-y-1">
                    {edu.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Subjects */}
                <div>
                  <h4 className="font-semibold mb-2">Key Subjects:</h4>
                  <div className="flex flex-wrap gap-1">
                    {edu.subjects.map((subject, sIndex) => (
                      <Badge key={sIndex} variant="outline" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <Award className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{cert.name}</CardTitle>
                      <div className="flex items-center justify-between">
                        <div className="text-primary font-semibold">{cert.issuer}</div>
                        <Badge variant="secondary">{cert.date}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{cert.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Skills Acquired:</h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground">
                    <strong>Credential ID:</strong> {cert.credentialId}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-2 border-primary/20">
            <CardContent className="pt-8">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Continuous Learning Philosophy</h3>
              <blockquote className="text-lg text-muted-foreground mb-4 leading-relaxed italic">
                "Education is not just about degrees and certifications—it's about building a foundation for lifelong
                learning and staying current with rapidly evolving technologies in the DevOps and cloud computing
                landscape."
              </blockquote>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <Badge variant="outline" className="py-2 px-4">
                  📚 Always Learning
                </Badge>
                <Badge variant="outline" className="py-2 px-4">
                  🎯 Goal-Oriented
                </Badge>
                <Badge variant="outline" className="py-2 px-4">
                  💡 Innovation-Focused
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
