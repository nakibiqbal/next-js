import { notFound } from "next/navigation";
import { courses } from "../page";

export default function CoursePage({ params }) {
  const { id } = params;
  const course = courses.find((course) => course.id === parseInt(id));
  if (id > 4) return notFound();

  return (
    <div>
      <h1>Welcome to the course of {course.course}</h1>
    </div>
  );
}
