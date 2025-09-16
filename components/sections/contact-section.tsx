"use client"

import type React from "react"
import { useState } from "react"
import { Github, Linkedin, Mail, MapPin, Phone, Twitter, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

type FormStatus = "idle" | "loading" | "success" | "error"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus("error")
      setErrorMessage("Please fill in all fields.")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setFormStatus("error")
      setErrorMessage("Please enter a valid email address.")
      return
    }

    try {
      setFormStatus("loading")
      setErrorMessage("")

      // Try Resend first, then fallback to EmailJS
      let response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      // If Resend fails, try EmailJS as fallback
      if (!response.ok) {
        console.log("Resend failed, trying EmailJS fallback...")
        response = await fetch("/api/contact-emailjs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
      }

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setFormStatus("success")
      setFormData({ name: "", email: "", message: "" })

      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 5000)
    } catch (error) {
      setFormStatus("error")
      setErrorMessage((error as Error).message || "Something went wrong. Please try again.")

      // Reset error status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle")
        setErrorMessage("")
      }, 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/RoshanDahal123",
      label: "GitHub",
      color: "hover:bg-gray-800 hover:text-white",
      bgColor: "bg-gray-100 dark:bg-gray-800",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/roshan-dahal-12095a269/",
      label: "LinkedIn",
      color: "hover:bg-blue-600 hover:text-white",
      bgColor: "bg-blue-100 dark:bg-blue-900",
    },
    
    {
      icon: Mail,
      href: "dahalroshan765@gmail.com",
      label: "Email",
      color: "hover:bg-red-500 hover:text-white",
      bgColor: "bg-red-100 dark:bg-red-900",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const renderFormStatusMessage = () => {
    switch (formStatus) {
      case "success":
        return (
          <motion.div
            className="flex items-center p-4 mb-6 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
            <p>Your message has been sent successfully! I'll get back to you soon.</p>
          </motion.div>
        )
      case "error":
        return (
          <motion.div
            className="flex items-center p-4 mb-6 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
            <p>{errorMessage || "Something went wrong. Please try again."}</p>
          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-purple-200/50 dark:from-purple-900/30 dark:to-purple-800/30" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="bg-white/70 dark:bg-gray-800/70 border-purple-200 dark:border-purple-700 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Contact Info Sidebar */}
                <div className="md:col-span-2 bg-gradient-to-br from-purple-500 to-purple-700 dark:from-purple-600 dark:to-purple-900 p-8 text-white">
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                  <div className="space-y-6 mb-8">
                    {[
                      { icon: Mail, text: "dahalroshan765@gmail.com" },
                      { icon: Phone, text: "9816994236" },
                      { icon: MapPin, text: "Ilam,Nepal" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <item.icon className="h-5 w-5 text-purple-200" />
                        <span className="text-purple-50">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-4">Follow Me</h4>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-110"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={social.label}
                        >
                          <social.icon className="h-5 w-5 text-white" />
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-0 right-0 opacity-10">
                    <svg width="120" height="120" viewBox="0 0 24 24" className="text-white">
                      <path
                        fill="currentColor"
                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="md:col-span-3 p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Send me a message</h3>

                  {renderFormStatusMessage()}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="border-purple-200 dark:border-purple-700 focus:border-purple-500 dark:focus:border-purple-400"
                        placeholder="Your full name"
                        disabled={formStatus === "loading"}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="border-purple-200 dark:border-purple-700 focus:border-purple-500 dark:focus:border-purple-400"
                        placeholder="your.email@example.com"
                        disabled={formStatus === "loading"}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="border-purple-200 dark:border-purple-700 focus:border-purple-500 dark:focus:border-purple-400"
                        placeholder="Tell me about your project..."
                        disabled={formStatus === "loading"}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
                        disabled={formStatus === "loading"}
                      >
                        {formStatus === "loading" ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
