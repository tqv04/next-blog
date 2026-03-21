import posts from "@/data/post.json";
import styles from "@/stylesheets/postdetail.module.css";
import { X } from "lucide-react";
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
};

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PostDetail({ params }: Props) {
  const { id } = await params;

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Link href="/" className={styles.close}>
          <X size={20} />
        </Link>
        <div className={styles.left}>
          <img src={post.image} className={styles.image} />
        </div>

        <div className={styles.right}>
          <div className={styles.meta}>
            {post.author} • {post.date}
          </div>

          <h1 className={styles.title}>{post.title}</h1>

          <p className={styles.desc}>{post.content}</p>

          <div className={styles.quote}>{post.extra}</div>
          <button className={styles.button}>Show more</button>
        </div>
      </div>
    </div>
  );
}
