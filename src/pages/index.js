import { Inter } from "@next/font/google";
import { useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const fetchBlogs = async () => {
    const response = await fetch("/api/hello");
    const data = await response.json();
    return data;
  };

  const blogs = fetchBlogs();

  console.log(blogs);

  return (
    <>
      <h1>
        {blogs.map((blog) => {
          return blog.blog.data.title;
        })}
      </h1>
    </>
  );
}
