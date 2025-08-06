import Link from "next/link";

export default function Courses() {
  const courses = [
    { id: 1, course: "Web Development" },
    { id: 2, course: "Graphics Design" },
    { id: 3, course: "Digital Marketing" },
    { id: 4, course: "Video Editing" },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5rem",
      }}
    >
      <h1>Select Course</h1>

      <ul>
        {courses.map((course) => {
          return (
            <li key={course.id}>
              <Link href={`/courses/${course.id}`}>{course.course}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
