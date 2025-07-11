import React from "react";

const events = [
  {
    title: "AWS Student Community Day 2024",
    date: "Sep 21, 2024",
    description: `I had the incredible opportunity to participate in the AWS Student Community Day hosted at MIT-WPU, which brought together cloud enthusiasts, professionals, and student developers from across the region.

Key Highlights:
🔹Attended sessions on AWS Cloud fundamentals, serverless architecture, DevOps best practices, and cloud security.
🔹Explored hands-on demonstrations of core AWS services like EC2, Lambda, S3, and CloudWatch.
🔹Engaged in technical discussions and Q&A with AWS experts, gaining real-world insights into modern cloud infrastructures.

This experience enriched my understanding of AWS services and reinforced my passion for cloud-native technologies and DevOps practices.`,
    image: "/aws.jpg" // Place your event image in public/ui/
  },
  {
    title: " DevConf.IN 2025!",
    date: "Feb 28, 2025",
    description: `🚀 My Experience at DevConf.IN 2025! 🤖🎯

I had an incredible time attending DevConf.IN 2025—a premier open-source conference bringing together developers, engineers, and tech enthusiasts from across the industry! 🌍💻

🔹 The event was packed with insightful sessions, hands-on workshops, and thought-provoking discussions on the latest advancements in Cloud, DevOps, AI/ML, Kubernetes, Quantum Computing, and Platform Engineering. 🚀
🔹 One of the key highlights for me was exploring the Hypershift open-source project by Red Hat, it was very amazing
🔹 Connecting with fellow open-source enthusiasts, developers, and industry leaders was truly inspiring! 🤝 It's Seeing the power of collaboration and innovation in the tech community is amazing.

Congratulations to MIT World Peace University, Red Hat, and the DevConf.IN team for organizing such a fantastic event! 🙌`,
    image: "/dev.jpg" // Place your event image in public/ui/
  },
];

export function Events() {
  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            Events & Seminars Attended
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A selection of professional events and seminars I have attended during my college days.
          </p>
        </div>
        <div className="flex flex-col gap-10 max-w-5xl mx-auto">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-900/20 dark:to-purple-800/20 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border hover:-translate-y-2 hover:scale-[1.02] overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full md:w-1/2 h-64 md:h-auto object-contain object-center"
                loading="lazy"
              />
              <div className="flex-1 flex flex-col p-6 justify-center">
                <div className="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-2">
                  {event.title}
                </div>
                <div className="text-sm text-muted-foreground mb-2">{event.date}</div>
                <div className="text-base text-foreground mb-4 whitespace-pre-line">{event.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 