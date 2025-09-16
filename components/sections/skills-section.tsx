"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function SkillsSection() {
  const skills = [
    {
      name: "Next.js",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <circle cx="12" cy="12" r="12" fill="#000" />
          <path
            d="M18.665 5.521A11.955 11.955 0 0 0 12 0C5.377 0 0 5.377 0 12s5.377 12 12 12c2.245 0 4.315-.6 6.115-1.652L9.447 12.94l9.218-7.419z"
            fill="#fff"
          />
          <path d="M13.5 10.5V21a12 12 0 0 0 6.115-1.652L13.5 10.5z" fill="#fff" />
        </svg>
      ),
    },
    {
      name: "React",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <circle cx="12" cy="12" r="2.5" fill="#61dafb" />
          <path
            d="M12 1c-1.5 8-8 8-8 11s6.5 3 8 11c1.5-8 8-8 8-11s-6.5-3-8-11z"
            fill="none"
            stroke="#61dafb"
            strokeWidth="1"
          />
          <path
            d="M12 1c1.5 8 8 8 8 11s-6.5 3-8 11c-1.5-8-8-8-8-11s6.5-3 8-11z"
            fill="none"
            stroke="#61dafb"
            strokeWidth="1"
          />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <rect width="24" height="24" rx="3" fill="#3178c6" />
          <path
            d="M1.5 8.5h4v1h-1.5v6h-1v-6h-1.5v-1zm6.5 0h1v7h-1v-7zm2.5 0h3.5c.8 0 1.5.7 1.5 1.5v4c0 .8-.7 1.5-1.5 1.5h-3.5v-7zm1 1v5h2.5c.3 0 .5-.2.5-.5v-4c0-.3-.2-.5-.5-.5h-2.5z"
            fill="#fff"
          />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <rect width="24" height="24" rx="3" fill="#f7df1e" />
          <path
            d="M7.5 14.5c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5v-6h-1.5v6c0 .5-.5 1-1 1s-1-.5-1-1h-1.5zm7-6h-1.5v6c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5c0-1.5-1-2.5-2.5-2.5h-1v-1.5z"
            fill="#000"
          />
        </svg>
      ),
    },
    {
      name: "Python",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path
            d="M12 0C8.5 0 8 1.5 8 3v2h4v1H6c-1.5 0-3 1-3 3v4c0 2 1.5 3 3 3h2v-2c0-1.5 1.5-3 3-3h4c1.5 0 3-1.5 3-3V3c0-1.5-.5-3-4-3h-4zm-1 2c.5 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1z"
            fill="#3776ab"
          />
          <path
            d="M12 24c3.5 0 4-1.5 4-3v-2h-4v-1h6c1.5 0 3-1 3-3v-4c0-2-1.5-3-3-3h-2v2c0 1.5-1.5 3-3 3H9c-1.5 0-3 1.5-3 3v4c0 1.5.5 3 4 3h4zm1-2c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1z"
            fill="#ffd43b"
          />
        </svg>
      ),
    },
    {
      name: "Node.js",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path
            d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.732 18.5L5.5 15.866V8.134L10.268 5.5v13zm3.464-13L18.5 8.134v7.732L13.732 18.5V5.5z"
            fill="#339933"
          />
        </svg>
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path
            d="M12 0C8.5 0 5.5 3 5.5 6.5c0 2.5 1.5 4.5 3.5 5.5v8c0 1 1 2 2 2s2-1 2-2v-8c2-1 3.5-3 3.5-5.5C16.5 3 13.5 0 12 0z"
            fill="#47A248"
          />
          <circle cx="12" cy="6.5" r="2" fill="#fff" />
        </svg>
      ),
    },
    {
      name: "PostgreSQL",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path
            d="M12 0C8.5 0 5.5 2.5 5.5 5.5v13c0 3 2.5 5.5 5.5 5.5h1c3 0 5.5-2.5 5.5-5.5v-13C19 2.5 16.5 0 13 0h-1z"
            fill="#336791"
          />
          <ellipse cx="12" cy="8" rx="3" ry="2" fill="#fff" />
          <ellipse cx="12" cy="16" rx="2" ry="1" fill="#fff" />
        </svg>
      ),
    },
    {
      name: "Docker",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <rect x="2" y="8" width="3" height="3" fill="#2496ed" />
          <rect x="6" y="8" width="3" height="3" fill="#2496ed" />
          <rect x="10" y="8" width="3" height="3" fill="#2496ed" />
          <rect x="14" y="8" width="3" height="3" fill="#2496ed" />
          <rect x="6" y="5" width="3" height="3" fill="#2496ed" />
          <rect x="10" y="5" width="3" height="3" fill="#2496ed" />
          <rect x="10" y="2" width="3" height="3" fill="#2496ed" />
          <path d="M18 10c2 0 4 1 4 3s-2 3-4 3H2c0-2 2-3 4-3h12z" fill="#2496ed" />
        </svg>
      ),
    },
    
    {
      name: "Git",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path
            d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"
            fill="#f05032"
          />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path
            d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.47 12 7 12z"
            fill="#06b6d4"
          />
        </svg>
      ),
    },
    {
      name: "WebSockets",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
            fill="#00d4aa"
          />
          <path
            d="M7 9h10v2H7zm0 4h10v2H7z"
            fill="#00d4aa"
          />
          <circle cx="8" cy="10" r="1" fill="#ffffff" />
          <circle cx="16" cy="10" r="1" fill="#ffffff" />
          <circle cx="8" cy="14" r="1" fill="#ffffff" />
          <circle cx="16" cy="14" r="1" fill="#ffffff" />
        </svg>
      ),
    },
    {
      name: "MySQL",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path
            d="M5.847 2.016c-.85.015-1.478.163-1.478.163l.123.738s.628-.148 1.355-.163c.726-.015 1.355.163 1.355.163l.123-.738s-.628-.178-1.478-.163zm6.306 0c-.85.015-1.478.163-1.478.163l.123.738s.628-.148 1.355-.163c.726-.015 1.355.163 1.355.163l.123-.738s-.628-.178-1.478-.163z"
            fill="#00758f"
          />
          <path
            d="M12 4c-4.418 0-8 1.79-8 4v8c0 2.21 3.582 4 8 4s8-1.79 8-4V8c0-2.21-3.582-4-8-4zm0 1.5c3.59 0 6.5 1.237 6.5 2.5S15.59 10.5 12 10.5 5.5 9.263 5.5 8s2.91-2.5 6.5-2.5zm0 11c-3.59 0-6.5-1.237-6.5-2.5v-1.553c1.396.87 3.748 1.303 6.5 1.303s5.104-.433 6.5-1.303V14c0 1.263-2.91 2.5-6.5 2.5z"
            fill="#f29111"
          />
        </svg>
      ),
    },
    {
      name: "GraphQL",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path
            d="M12 0L2.5 6v12L12 24l9.5-6V6L12 0zm6.563 17.125l-1.688.969-3-5.25 1.688-.969 3 5.25zM12 20.5l-7.5-4.5V8L12 3.5 19.5 8v8L12 20.5zm5.313-14.094l-1.688.969-3-5.25 1.688-.969 3 5.25z"
            fill="#e10098"
          />
          <circle cx="12" cy="12" r="2" fill="#e10098" />
          <path d="M12 8l-3.464 2 3.464 2 3.464-2L12 8z" fill="#ffffff" />
        </svg>
      ),
    },
    {
      name: "Redux",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path
            d="M16.633 16.633c.91 0 1.648-.738 1.648-1.648s-.738-1.648-1.648-1.648c-.91 0-1.648.738-1.648 1.648s.738 1.648 1.648 1.648zM12 14.324c.91 0 1.648-.738 1.648-1.648S12.91 11.029 12 11.029s-1.648.738-1.648 1.648.738 1.647 1.648 1.647zM7.367 16.633c.91 0 1.648-.738 1.648-1.648s-.738-1.648-1.648-1.648c-.91 0-1.648.738-1.648 1.648s.738 1.648 1.648 1.648z"
            fill="#764abc"
          />
          <path
            d="M16.633 8.324c-.91 0-1.648.738-1.648 1.648s.738 1.648 1.648 1.648c.91 0 1.648-.738 1.648-1.648s-.738-1.648-1.648-1.648zM7.367 8.324c-.91 0-1.648.738-1.648 1.648s.738 1.648 1.648 1.648c.91 0 1.648-.738 1.648-1.648s-.738-1.648-1.648-1.648z"
            fill="#764abc"
          />
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.633 8.972c.758 0 1.426.417 1.769 1.029.343.612.268 1.363-.187 1.895l-3.77 4.412c-.455.532-1.137.8-1.824.714-.687-.086-1.297-.51-1.632-1.134L8.625 13.97c-.335-.624-.232-1.396.274-1.926s1.296-.753 1.97-.485l2.756.93c.674.268 1.426-.019 1.801-.687.375-.668.268-1.484-.257-1.952l-3.77-3.375c-.525-.468-.651-1.245-.301-1.856.35-.611.996-.941 1.679-.836.683.105 1.263.571 1.549 1.246l1.494 3.522c.286.675.926 1.119 1.62 1.119z"
            fill="#764abc"
          />
        </svg>
      ),
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const [floatingElements, setFloatingElements] = useState<Array<{
    id: number;
    left: number;
    top: number;
    xOffset: number;
    duration: number;
    delay: number;
  }>>([])

  useEffect(() => {
    setFloatingElements(
      [...Array(6)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        xOffset: Math.random() * 20 - 10,
        duration: 10 + Math.random() * 10,
        delay: Math.random() * 5,
      }))
    )
  }, [])

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-purple-200/30 dark:from-purple-900/10 dark:to-purple-800/10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent mb-4">
            My Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="bg-gradient-to-br from-purple-500/80 to-purple-700/80 dark:from-purple-600/80 dark:to-purple-800/80 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center h-40 hover:shadow-xl transition-all duration-300 border border-purple-300/30 dark:border-purple-600/30">
                <motion.div className="mb-4" whileHover={{ rotate: [0, -5, 5, 0] }} transition={{ duration: 0.5 }}>
                  <div className="text-white">{skill.icon}</div>
                </motion.div>
                <h3 className="font-medium text-sm text-white text-center">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating skill icons animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {floatingElements.map((element) => (
            <motion.div
              key={element.id}
              className="absolute w-8 h-8 opacity-10"
              style={{
                left: `${element.left}%`,
                top: `${element.top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, element.xOffset, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: element.duration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: element.delay,
              }}
            >
              <div className="w-full h-full bg-purple-400 dark:bg-purple-600 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
