"use client";
import AboutPage from "@/app/about/page";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

const Pages = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<string>();
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    // const timer = setTimeout(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );

        // console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP error! status:${response.status}`);
        }

        const data: Post[] = await response.json();
        console.log(data);
        setPosts(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Something went Wrong",
        );
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
    // }, 5000);

    return () => {
      // clearTimeout(timer);
      console.log("clean up"); // to clean up
      controller.abort(); // to  abort
      console.log("aborted");
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-4">
      <Link href="/about">About</Link>
      <AboutPage />
      {posts
        ? posts.slice(0, 10).map(({ id, title, body }) => {
            return (
              <div
                key={id}
                className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow"
              >
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  {title}
                </p>
                <p className="text-sm text-gray-500">{body}</p>
              </div>
            );
          })
        : "something Wrong"}
    </div>
  );
};

export default Pages;
