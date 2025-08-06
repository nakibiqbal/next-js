import { notFound } from "next/navigation";

export default function CoursePage({ params }) {
  const { id } = params;
  if (id > 4) return notFound();

  return (
    <div>
      <h1>Welcome to the course number {id}</h1>
    </div>
  );
}
