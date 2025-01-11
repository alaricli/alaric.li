import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          {/* <li>
            <Link href="/blog">Blog</Link>
          </li> */}
        </ul>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>
            <a href="https://drive.google.com/file/d/1W_Lpz3W5KBd5UJkbq76ja9_E5T7s0Ec-/view?usp=sharing">
              <span>Resume</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:alaricli@outlook.com?subject=Hello%20Alaric&body=Hello%20Alaric,"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bg-[#3B82F6] text-[#FFFFFF] p-3 rounded">
                Contact Me
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
