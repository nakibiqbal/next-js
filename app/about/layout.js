import Link from "next/link";

export default function aboutLayout({ children }) {
  return (
    <div>
      <nav
        style={{
          border: "2px solid red",
          top: "8rem",
          width: "25rem",
        }}
      >
        <ul>
          <li>
            <Link href={"/about/details"}>Details</Link>
          </li>
          <li>
            <Link href={"/about/pictures"}>Pictures</Link>
          </li>
        </ul>
      </nav>

      {children}
    </div>
  );
}
