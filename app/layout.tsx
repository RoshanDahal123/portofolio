import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Roshan Dahal | Engineering Student",
  description:
    "Welcome to the portfolio of Roshan Dahal, an aspiring engineer with a passion for technology and innovation.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    url: "/",
    title: "Roshan Dahal | Engineering Student",
    description:
      "Explore the portfolio of Roshan Dahal, showcasing skills, projects and achievements in engineering.",
    type: "website",
    images: [
      {
        url: "/meta/ogg.jpeg",
        width: 1200,
        height: 630,
        alt: "Roshan Dahal's Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Roshan Dahal - Engineering Student",
    description:
      "Discover the work and accomplishments of Roshan Dahal in the field of engineering.",
    images: [
      {
        url: "https://pbs.twimg.com/profile_images/roshan",
        alt: "Roshan Dahal's Portfolio"
      }
    ]
  },
  icons: {
    icon: "/meta/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
