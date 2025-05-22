"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    title: "Capture your 100k subscribers in one week",
    subtitle: "Capture your 100k subscribers",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "Capture your 100k subscribers in one month",
    subtitle: "Capture your 100k subscribers",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "Capture your 100k subscribers in one year",
    subtitle: "Capture your 100k subscribers",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
];

export function BlogSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {blogs.map((blog, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="relative h-48">
            <Image
              src={blog.image || "/placeholder.svg"}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-sm font-bold text-purple-900 mb-2">
              {blog.title}
            </h3>
            <p className="text-xs text-gray-600 mb-4">{blog.subtitle}</p>
            <Link
              href={blog.link}
              className="inline-block bg-purple-600 text-white text-xs font-medium py-1 px-3 rounded-full hover:bg-purple-700 transition-colors"
            >
              Read Article
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
