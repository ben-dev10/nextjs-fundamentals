import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar  border-b border-gray-400/50 p-4 rounded-md ">
      <div className="navbar-wrapper flex max-w-4xl mx-auto">
        <div className="logo mr-auto ">
          <Link href={"/"} className="font-bold">
            Next-Fundamentals
          </Link>
        </div>
        <nav className="links flex gap-2">
          <Link
            href={"/tutorials"}
            className="text-[12px] text-blue-500 hover:underline"
          >
            Tutorials
          </Link>
          <Link
            href={"/about"}
            className="text-[12px] text-blue-500 hover:underline"
          >
            About
          </Link>
        </nav>
      </div>
    </div>
  );
}
