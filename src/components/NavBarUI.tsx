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
          <Link
            href={"/tutorials"}
            className="text-[12px] text-indigo-600 hover:text-indigo-400"
          >
            Tutorials
          </Link>
          <Link
            href={"/about"}
            className="text-[12px] text-indigo-600 hover:text-indigo-400"
          >
            About
          </Link>
        </nav>
      </div>

      <div className="doodle"></div>
    </div>
  );
}
