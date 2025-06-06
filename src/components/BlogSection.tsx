import React from "react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/blog-1.png",
      title:
        "Capcons gets 100k subscribers in one week. Capcons gets 100k subscribers in one week.",
      alt: "Microphone with blurred colorful lights background",
    },
    {
      id: 2,
      image: "/blog-2.png",
      title:
        "Capcons gets 100k subscribers in one week. Capcons gets 100k subscribers in one week.",
      alt: "Person celebrating with confetti",
    },
    {
      id: 3,
      image: "/blog-3.png",
      title:
        "Capcons gets 100k subscribers in one week. Capcons gets 100k subscribers in one week.",
      alt: "Person working on laptop at desk",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700">
          Related Blogs
        </h2>
        <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200">
          View All
        </button>
      </div>

      {/* B */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Blog Image */}
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Blog Content */}
            <div className="p-6">
              <h3 className="text-gray-700 text-base leading-relaxed mb-6 line-clamp-3">
                {post.title}
              </h3>

              {/* Read Article Button */}
              <button className="bg-lime-400 hover:bg-lime-500 text-black px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                Read Article
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
