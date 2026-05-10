"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ExternalLink, Github, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"

interface Project {
  id: number
  title: string
  description: string
  fullDescription: string
  image: string
  technologies: string[]
  githubFrontendUrl: string
  githubBackendUrl?:string
  demoUrl: string
  
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      fullDescription:
        "A comprehensive e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product catalog, shopping cart, payment integration with Khalti, order management, and admin dashboard. The application is fully responsive and optimized for performance.",
      image: "/images/ecommerce.png?height=300&width=400",
      technologies: ["React", "Node.js", "PostgreSQL", "Khalti", "Tailwind CSS"],
      githubFrontendUrl: "https://github.com/RoshanDahal123/DigitalDokanFrontEnd",
      githubBackendUrl:"https://github.com/RoshanDahal123/MERN-DigitalDhokanProject",
      demoUrl: "https://digital-dokan-front-end.vercel.app/",
     
    },
    {
      id: 2,
      title: "Stock Price Prediction",
      description: "Predicting stock prices using LSTM and sentiment analysis",
      fullDescription:
        "This research project aims to predict stock prices for select companies by combining historical financial data with sentiment analysis derived from news headlines. Leveraging a Long Short-Term Memory (LSTM) neural network and natural language processing (NLP), the application forecasts the next day's closing price while providing insights into model performance through error metrics and visualizations",
      image: "/images/StockPrice.jpeg?height=300&width=400",
      technologies: ["Data Scraping","Deep Learning", "LSTM", "NLP"],
      githubFrontendUrl: "https://github.com/pawandai/stock-price-prediction",
      // githubBackendUrl:"https://github.com/RoshanDahal123/MERN-DigitalDhokanProject",
      demoUrl: "https://github.com/pawandai/stock-price-prediction",
     
    },
    {
      id: 3,
      title: "Autonomous Navigation with Deep-Learning",
      description: "Developing an autonomous navigation system using deep Q-learning algorithms",
      fullDescription:
        "This research project aims to development a simulation of an autonomous navigation bot using Deep Q Learning (DQL) that can navigate through unknown indoor environments while avoiding obstacles and reaching designated goals.",
      image: "/images/autonomous.png?height=300&width=400",
      technologies: ["DQL","Simulation", "Python", "ROS2"],
      githubFrontendUrl: "https://github.com/BEI078/autonomous-navigation-bot",
      // githubBackendUrl:"https://github.com/RoshanDahal123/MERN-DigitalDhokanProject",
      demoUrl: "https://github.com/BEI078/autonomous-navigation-bot",
      
    },
    {
  id: 4, 
  title: "TrueFeedback",
  description: "An anonymous messaging platform that allows users to receive honest feedback.",
  fullDescription:
    "A full-stack web application built with Next.js that enables users to create a unique profile link and receive anonymous messages securely. Key features include JWT-based authentication via NextAuth, email OTP verification with Resend, a personalized dashboard to manage messages, AI-powered message suggestions, and a fully responsive UI built with Tailwind CSS and shadcn/ui.",
  image: "/images/true_feedback.png?height=300&width=400", // Update with your actual image path
  technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB", "NextAuth", "Resend"],
  githubFrontendUrl: "https://github.com/RoshanDahal123/TrueFeedback", // Update with your actual repo URL
  demoUrl: "https://true-feedback-blush.vercel.app/", // Update with your live deployment URL
  
}
  ]

  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedProject) {
        setSelectedProject(null)
      }
    }

    if (selectedProject) {
      document.addEventListener("keydown", handleEscKey)
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey)
      document.body.style.overflow = "unset"
    }
  }, [selectedProject])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedProject(null)
    }
  }

  return (
    <section id="projects" className="py-20">
      

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <Card
                className="group relative bg-white/70 dark:bg-gray-800/70 border-purple-200 dark:border-purple-700 hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden h-full"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-[400px] object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <Button size="sm" variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
        {/* Project Modal with highest z-index */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleBackdropClick}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">{selectedProject.title}</h3>
 
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button asChild className="bg-purple-600 hover:bg-purple-700">
                      <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={selectedProject.githubFrontendUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                     
                    </Button>
                    {selectedProject.githubBackendUrl && (
                      <Button variant="outline" asChild>
                        <a href={selectedProject.githubBackendUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Backend Code
                        </a>
                      </Button>
                    )}
                  </div>

                  <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
                    Press <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">ESC</kbd> to close
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </section>
  )
}
