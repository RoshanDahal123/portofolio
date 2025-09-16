"use client"

import type React from "react"
import { useState } from "react"
import { Calendar, Edit, Plus, Trash2, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  tags: string[]
  readTime: string
}

export function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "Getting Started with React 18",
      excerpt:
        "Learn about the new features and improvements in React 18, including concurrent rendering and automatic batching.",
      content: `# Getting Started with React 18

React 18 introduces several exciting features that improve performance and developer experience.

## Concurrent Rendering

Concurrent rendering allows React to interrupt rendering work to handle high-priority updates...

## Automatic Batching

React 18 automatically batches multiple state updates for better performance...`,
      author: "John Doe",
      date: "2024-01-15",
      tags: ["React", "JavaScript", "Frontend"],
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Building Responsive Layouts with Tailwind CSS",
      excerpt: "Master the art of creating beautiful, responsive layouts using Tailwind CSS utility classes.",
      content: `# Building Responsive Layouts with Tailwind CSS

Tailwind CSS makes it easy to create responsive designs with its mobile-first approach...`,
      author: "John Doe",
      date: "2024-01-10",
      tags: ["CSS", "Tailwind", "Design"],
      readTime: "7 min read",
    },
  ])

  const [isEditing, setIsEditing] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    tags: "",
  })

  const isDevelopment = process.env.NODE_ENV === "development"

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post)
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      tags: post.tags.join(", "),
    })
    setIsEditing(true)
  }

  const handleDelete = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newPost: BlogPost = {
      id: editingPost?.id || Date.now(),
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      author: "John Doe",
      date: new Date().toISOString().split("T")[0],
      tags: formData.tags.split(",").map((tag) => tag.trim()),
      readTime: `${Math.ceil(formData.content.split(" ").length / 200)} min read`,
    }

    if (editingPost) {
      setPosts(posts.map((post) => (post.id === editingPost.id ? newPost : post)))
    } else {
      setPosts([newPost, ...posts])
    }

    setIsEditing(false)
    setEditingPost(null)
    setFormData({ title: "", excerpt: "", content: "", tags: "" })
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditingPost(null)
    setFormData({ title: "", excerpt: "", content: "", tags: "" })
  }

  return (
    <section id="blog" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50/30 to-purple-100/30 dark:from-purple-900/20 dark:to-purple-800/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent mb-4">
            Blog & Articles
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development and technology
          </p>

          {isDevelopment && (
            <Button onClick={() => setIsEditing(true)} className="mt-6 bg-purple-600 hover:bg-purple-700">
              <Plus className="mr-2 h-4 w-4" />
              New Post
            </Button>
          )}
        </div>

        {/* Blog Post Form (Development Only) */}
        {isEditing && isDevelopment && (
          <Card className="mb-8 bg-white/70 dark:bg-gray-800/70 border-purple-200 dark:border-purple-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                {editingPost ? "Edit Post" : "Create New Post"}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  placeholder="Post title"
                  value={formData.title}
                  onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                  required
                />
                <Input
                  placeholder="Post excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData((prev) => ({ ...prev, excerpt: e.target.value }))}
                  required
                />
                <Input
                  placeholder="Tags (comma separated)"
                  value={formData.tags}
                  onChange={(e) => setFormData((prev) => ({ ...prev, tags: e.target.value }))}
                />
                <Textarea
                  placeholder="Post content (Markdown supported)"
                  value={formData.content}
                  onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
                  rows={10}
                  required
                />

                <div className="flex gap-4">
                  <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                    {editingPost ? "Update Post" : "Create Post"}
                  </Button>
                  <Button type="button" variant="outline" onClick={handleCancel}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={post.id}
              className="group bg-white/70 dark:bg-gray-800/70 border-purple-200 dark:border-purple-700 hover:shadow-xl transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  {isDevelopment && (
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" onClick={() => handleEdit(post)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleDelete(post.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <Button variant="outline" className="w-full mt-4">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
