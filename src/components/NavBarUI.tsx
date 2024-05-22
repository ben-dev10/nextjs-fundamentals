import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar border-b p-4 rounded-md ">
      <div className="navbar-wrapper flex max-w-4xl mx-auto">
        <div className="logo mr-auto ">
          <Link href={"/"} className="font-bold">
            Next-Fundamentals
          </Link>
        </div>
        <nav className="links flex gap-3 duration-200">
          <Link href={"/tutorials"} className="navLink">
            Tutorials
          </Link>
          <Link href={"/about"} className="navLink">
            About
          </Link>
          <Link href={"/blog"} className="navLink">
            Blog
          </Link>
        </nav>
      </div>

      <div className="doodle"></div>
    </div>
  );
}
