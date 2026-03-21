"use client";

import { useEffect, useState, useMemo } from "react";
import styles from "@/stylesheets/PostCard.module.css";
import categories from "@/data/categories.json";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  category: string;
  image: string;
  author: string;
  date: string;
  content: string;
  extra: string;
  color: string;
};

type Category = {
  name: string;
  value: string;
  color: string;
};

export default function PostCard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    if (activeCategory === "all") return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [posts, activeCategory]);

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.promptFilter}>
          {categories.map((cat: Category) => {
            const isActive = activeCategory === cat.value;

            return (
              <span
                key={cat.value}
                className={`${styles.filterItem} ${
                  isActive ? styles.active : ""
                }`}
                onClick={() => setActiveCategory(cat.value)}
              >
                <span
                  className={styles.dot}
                  style={{ backgroundColor: cat.color }}
                />
                {cat.name}
              </span>
            );
          })}
        </div>

        <div className={styles.cardContainer}>
          {filteredPosts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>

        <div className={styles.load}>
          <button className={styles.loadbtn}>Load more</button>
        </div>
      </div>
    </div>
  );
}

function PostItem({ post }: { post: Post }) {
  return (
    <Link href={`/postcard/${post.id}`} className={styles.card}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <span className={styles.tag}>
          <span
            className={styles.dot}
            style={{ backgroundColor: post.color }}
          />
          {post.category}
        </span>
      </div>

      <p className={styles.title}>{post.title}</p>
    </Link>
  );
}
