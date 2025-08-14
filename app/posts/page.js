import getAllPost from "@/lib/getAllPost";

export default async function Posts() {
  const posts = await getAllPost();

  return (
    <div style={{ textAlign: "center" }}>
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
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
