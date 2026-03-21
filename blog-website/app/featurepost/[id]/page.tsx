import featurepost from "@/data/featurepost.json";
import styles from "@/stylesheets/featurepostdetail.module.css";
import Subscribe from "@/component/subcribe";
type Props = {
  params: Promise<{ id: string }>;
};

export default async function FeaturePostsDetail({ params }: Props) {
  const { id } = await params;

  const post = featurepost.find((p) => p.id === Number(id));

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <>
      <div className={styles.container}>
        {/* HERO CONTENT */}
        <div className={styles.hero}>
          <h1 className={styles.title}>{post.title}</h1>

          <p className={styles.desc}>{post.extra}</p>

          <div className={styles.meta}>
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>2 min read</span>

            {post.featured && <span className={styles.badge}>Featured</span>}
          </div>
        </div>

        {/* IMAGE */}
        <div className={styles.imageWrap}>
          <img src={post.image} alt={post.title} />
          <span className={styles.category}>{post.category}</span>
        </div>

        {/* CONTENT */}
        <div className={styles.content}>
          <p>{post.content}</p>
        </div>
      </div>
      <Subscribe />
    </>
  );
}
