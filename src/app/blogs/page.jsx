import Link from 'next/link';
import React from 'react';

const BlogsPage = () => {

 const blogs = [
  {
    id: 1,
    title: "Getting Started with React: A Beginner's Guide",
    description:
      "Learn the fundamentals of React including components, props, state, and how to build your first interactive UI.",
    author: "Juhairul Islam",
    date: "2026-04-01",
    category: "React",
    readTime: "5 min read",
    image: "https://i.ibb.co/react-blog.jpg"
  },
  {
    id: 2,
    title: "Why Tailwind CSS is a Game Changer for Frontend Developers",
    description:
      "Discover how Tailwind CSS helps developers build modern, responsive layouts faster with utility-first styling.",
    author: "Juhairul Islam",
    date: "2026-04-02",
    category: "CSS",
    readTime: "4 min read",
    image: "https://i.ibb.co/tailwind-blog.jpg"
  },
  {
    id: 3,
    title: "Understanding JavaScript ES6 Features",
    description:
      "Explore modern JavaScript features like arrow functions, destructuring, spread operator, and modules.",
    author: "Juhairul Islam",
    date: "2026-04-03",
    category: "JavaScript",
    readTime: "6 min read",
    image: "https://i.ibb.co/js-blog.jpg"
  },
  {
    id: 4,
    title: "Building Responsive Layouts with Flexbox and Grid",
    description:
      "Master CSS Flexbox and Grid to create responsive and flexible layouts for modern web applications.",
    author: "Juhairul Islam",
    date: "2026-04-04",
    category: "CSS",
    readTime: "7 min read",
    image: "https://i.ibb.co/grid-blog.jpg"
  }
];


    
    return (
        <div>
            <h2 className="text-3xl font-bold mb-4 text-center">Blogs</h2>

            {
                blogs.map((blog) => <div key={blog.id}>

                    <h2 className='text-xl font-bold mb-2'>{blog.title}</h2>

                    <Link href='/'>Show details</Link>


                </div>)
            }
            
        </div>
    );
};

export default BlogsPage;