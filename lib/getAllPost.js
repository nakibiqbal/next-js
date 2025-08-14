export default async function getAllPost() {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  if (!posts.ok) throw new Error("There was an error!");

  return posts.json();
}
