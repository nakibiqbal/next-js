import Link from "next/link";
import styles from "../page.module.css";

export const courses = [
  { id: 1, course: "Web Development" },
  { id: 2, course: "Graphics Design" },
  { id: 3, course: "Digital Marketing" },
  { id: 4, course: "Video Editing" },
];

export default function Courses() {
  return (
    <div className={styles.container}>
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
