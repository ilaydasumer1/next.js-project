"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/posts.json");
      const data = await res.json();
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center my-8">
      <h1 className="text-4xl font-bold mb-6">En İyi Pazar Yerleri</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl w-full px-4">
        {posts.map((post) => (
          <div key={post.id} className="shadow-lg rounded-lg overflow-hidden">
            <Link href={`posts/${post.id}`} passHref>
              {" "}
              <a className="flex flex-col items-center text-center p-4 hover:bg-gray-50 transition-all duration-200 ease-in-out">
                {" "}
                <img
                  className="w-full h-48 object-cover p-3 rounded-lg"
                  src={post.img}
                  alt={post.name}
                />
                <h2 className="mt-2 font-semibold">{post.name}</h2>
                <p className="text-gray-600">{post.description}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
