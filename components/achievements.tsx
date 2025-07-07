import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Target, Zap, Award, BookOpen } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Academic Excellence",
      description: "Achieved SGPA of 9.50/10 in B-Tech Computer Science",
      category: "Academic",
      color: "text-yellow-500",
    },
    {
      icon: Award,
      title: "Multiple Certifications",
      description: "Completed 4 professional certifications in DevOps and Cloud technologies",
      category: "Certification",
      color: "text-blue-500",
    },
    {
      icon: Star,
      title: "Project Excellence",
      description: "Built production-ready applications with complete DevOps pipelines",
      category: "Technical",
      color: "text-purple-500",
    },
    {
      icon: Target,
      title: "GitOps Implementation",
      description: "Successfully implemented GitOps workflows with ArgoCD and Kubernetes",
      category: "DevOps",
      color: "text-green-500",
    },
    {
      icon: Zap,
      title: "Automation Expert",
      description: "Automated deployment processes reducing manual intervention by 90%",
      category: "Automation",
      color: "text-orange-500",
    },
    {
      icon: BookOpen,
      title: "Continuous Learner",
      description: "Actively learning and implementing latest DevOps technologies and practices",
      category: "Learning",
      color: "text-indigo-500",
    },
  ]

  const stats = [
    { label: "Projects Completed", value: "15+", icon: "🚀" },
    { label: "Technologies Mastered", value: "25+", icon: "⚡" },
    { label: "Certifications Earned", value: "4", icon: "🏆" },
    { label: "GitHub Repositories", value: "20+", icon: "📁" },
  ]

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Achievements & Milestones
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Key accomplishments and milestones in my DevOps and cloud engineering journey
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20"
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <achievement.icon
                    className={`h-8 w-8 ${achievement.color} group-hover:scale-110 transition-transform`}
                  />
                  <div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    <Badge variant="outline" className="mt-1">
                      {achievement.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
       
      </div>
    </section>
  )
}
