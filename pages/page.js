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
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8">Blog Yazıları</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              {" "}
{              console.log(post.id)
}              <a
                className="text-blue-500 hover:underline"
                style={{ cursor: "pointer" }}
              >
                {" "}
                <h2>{post.name}</h2>
              </a>
            </Link>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
