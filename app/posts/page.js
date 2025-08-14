import getAllPost from "@/lib/getAllPost";
import Link from "next/link";
import styles from "../page.module.css";

export default async function Posts() {
  const posts = await getAllPost();

  return (
    <div className={styles.container}>
      <h1>These are the posts</h1>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
