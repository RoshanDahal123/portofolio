"use client"
import { Award, Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function AboutSection() {
  

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

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-80 h-80 mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full blur-2xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <img
                src="/roshan.png?height=320&width=320"
                alt="Profile"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
               Hello, I'm Roshan Dahal, a passionate Software Engineer currently focused on AI, ML and Data Science.
              I'm constantly iterating on my craft, whether it's optimizing code, designing user experiences.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I believe in the power of technology to transform lives and I'm excited to be a part of that journey. 
                With a background in computer science and a keen interest in emerging technologies, I approach each project with curiosity and dedication
              </p>
            </div>

           
            
          </motion.div>
        </div>
      </div>
    </section>
  )
}
