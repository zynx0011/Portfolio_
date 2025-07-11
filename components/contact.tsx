"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Send, Calendar, Clock, Briefcase, Heart } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<null | { type: 'success' | 'error', message: string }>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (data.success) {
        setResult({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' })
        setFormData({ name: '', email: '', company: '', subject: '', message: '' })
      } else {
        setResult({ type: 'error', message: 'Failed to send message. Please try again later or email me directly.' })
      }
    } catch {
      setResult({ type: 'error', message: 'Failed to send message. Please try again later or email me directly.' })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kunalnachan10@gmail.com",
      href: "mailto:kunalnachan10@gmail.com",
      description: "Best way to reach me for professional inquiries",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8380028595",
      href: "tel:+918380028595",
      description: "Available for calls during business hours",
    },
    
  ]

  const availability = [
    {
      icon: Briefcase,
      title: "Full-time Positions",
      description: "Seeking DevOps Engineer, Cloud Engineer, or SRE roles",
      status: "Actively Looking",
    },
    {
      icon: Clock,
      title: "Consulting Projects",
      description: "Available for short-term DevOps and cloud infrastructure projects",
      status: "Open to Discuss",
    },
    {
      icon: Heart,
      title: "Collaboration",
      description: "Open source contributions and technical mentoring",
      status: "Always Interested",
    },
  ]

  return (
    <section
      id="contact"
      className="py-12 sm:py-20 px-2 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20"
    >
      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            Let&apos;s Connect &amp; Collaborate
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl sm:max-w-4xl mx-auto leading-relaxed">
            Ready to discuss your next DevOps project or explore opportunities? I&apos;m passionate about building scalable
            infrastructure solutions and would love to hear about your challenges and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 mb-10 sm:mb-16 ">
          {/* Contact Information */}
          <div className="lg:col-span-1 mb-8 lg:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Get In Touch</h3>
             <div className="mb-4 sm:mb-6">
              {/* Current Status */}
             <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400 text-base sm:text-lg">
                  <Calendar className="h-5 w-5" />
                  Current Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-green-700 dark:text-green-400 text-sm sm:text-base">Available for Opportunities</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Actively seeking full-time DevOps Engineer positions and open to discussing exciting projects.
                </p>
              </CardContent>
            </Card>
             </div>

            {/* Contact Methods */}
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-4 sm:pt-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0 p-2 sm:p-3 bg-primary/10 rounded-full">
                        <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-base sm:text-lg">{info.label}</div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-primary hover:text-primary/80 transition-colors font-medium text-base sm:text-lg"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-foreground font-medium text-base sm:text-lg">{info.value}</div>
                        )}
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

           
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 mt-0 lg:mt-19">
            
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Send Me a Message</CardTitle>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Whether you have a job opportunity, project idea, or just want to connect, I&apos;d love to hear from you!
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="text-xs sm:text-sm font-medium mb-2 block">Your Name *</label>
                      <Input
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-10 sm:h-12"
                      />
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm font-medium mb-2 block">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-10 sm:h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="text-xs sm:text-sm font-medium mb-2 block">Company/Organization</label>
                      <Input
                        name="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleChange}
                        className="h-10 sm:h-12"
                      />
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm font-medium mb-2 block">Subject *</label>
                      <Input
                        name="subject"
                        placeholder="Job Opportunity / Project Discussion"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="h-10 sm:h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-medium mb-2 block">Message *</label>
                    <Textarea
                      name="message"
                      placeholder="Tell me about the opportunity, project requirements, or what you&apos;d like to discuss..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full group hover:scale-105 transition-transform" disabled={loading}>
                    <Send className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                  {result && (
                    <div className={`mt-4 text-center font-medium ${result.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>{result.message}</div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Availability Section */}
        <div className="mb-10 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">What I&apos;m Looking For</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {availability.map((item, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-6 sm:pt-8">
                  <item.icon className="h-8 w-8 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
                  <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">{item.title}</h4>
                  <p className="text-muted-foreground mb-2 sm:mb-4 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                  <Badge variant="secondary" className="bg-primary/10 text-primary text-xs sm:text-base">
                    {item.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl sm:max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="pt-6 sm:pt-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Build Something Amazing Together?</h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-base sm:text-lg">
                I&apos;m excited about opportunities to contribute to innovative projects and work with talented teams. Let&apos;s
                discuss how my DevOps and cloud expertise can help achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-center">
                <Badge variant="outline" className="py-2 px-4 sm:px-6 text-xs sm:text-base">
                  💼 Open to Full-time Opportunities
                </Badge>
                <Badge variant="outline" className="py-2 px-4 sm:px-6 text-xs sm:text-base">
                  🚀 Available for Consulting Projects
                </Badge>
                
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
