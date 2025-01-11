import Image from "next/image";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <Image
          src="/me.png"
          width={300}
          height={300}
          alt="Picture of the author"
          className="rounded-full"
        />
        <h1 className="text-4xl mt-3">Alaric Li</h1>
        <div className="flex flex-col items-center text-center">
          <span>ubc business + cs</span>
          <span>prev: sap</span>
        </div>
        <ul className="flex mt-2 space-x-2">
          <li>
            <a
              href="https://www.linkedin.com/in/alaricli/"
              className="hover:text-[#0077B5]"
            >
              <FaLinkedin style={{ fontSize: "30px" }} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/alaricli"
              className="hover:text-[#181717]"
            >
              <FaGithubSquare style={{ fontSize: "30px" }} />
            </a>
          </li>
          <li>
            <a
              href="https://www.x.com/alaric__li"
              className="hover:text-[#1DA1F2]"
            >
              <FaSquareXTwitter style={{ fontSize: "30px" }} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/andyli51/"
              className="hover:text-[#E1306C]"
            >
              <FaSquareInstagram style={{ fontSize: "30px" }} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
