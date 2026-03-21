"use client";
import featurepost from "@/data/featurepost.json";
import styles from "@/stylesheets/featureposts.module.css";
import Link from "next/link";

export default function FeaturePosts() {
  const mainPost = featurepost[0];
  const sidePosts = featurepost.slice(1, 4);

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Tutorials, Guides and Resources</h2>

      <div className={styles.grid}>
        <Link href={`/featurepost/${mainPost.id}`} className={styles.bigCard}>
          <img src={mainPost.image} alt="" />
          <div className={styles.bigContent}>
            <h3>{mainPost.title}</h3>
            <p>{mainPost.extra}</p>
          </div>
        </Link>

        <div className={styles.side}>
          {sidePosts.map((post) => (
            <Link
              key={post.id}
              href={`/featurepost/${post.id}`}
              className={styles.smallCard}
            >
              <img src={post.image} alt="" />

              <div className={styles.smallContent}>
                <h4>{post.title}</h4>
                <p>
                  {post.author} • {post.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
