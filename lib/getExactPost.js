export default async function getExactPost(id) {
  const exactPost = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return exactPost.json();
}
