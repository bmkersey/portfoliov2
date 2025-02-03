import Link from "next/link";

export default function Navigation() {
  return (
    <div className="fixed top-0 w-full bg-darkPurp">
      <h1 className="text-3xl font-bold ml-4">&lt;BK/&gt;</h1>
      <ul className="flex justify-center space-x-10">
        <li>
          <Link href="#home" className="hover:text-purple-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" className="hover:text-purple-500">
            About
          </Link>
        </li>
        <li>
          <Link href="#skills" className="hover:text-purple-500">
            Skills
          </Link>
        </li>
        <li>
          <Link href="#projects" className="hover:text-purple-500">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-purple-500">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
