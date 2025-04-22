import { useState } from "react";
import { Link } from "react-router-dom";
import { Github, Instagram, Mail } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <nav className="text-white  shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="stylefont text-2xl text-white font-bold dark:text-white"
          >
            Diksh@
          </Link>
          <ul className=" hidden md:flex space-x-6">
            {[
              { name: "About", path: "/about" },
              { name: "My Work", path: "/work" },
              { name: "Contact", path: "/contact" },
            ].map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className=" dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-end  p-2 gap-3">
            <a
              className="border border-gray-600 p-1 rounded-md"
              href="https://github.com/dikshamuktan?tab=overview&from=2024-12-01&to=2024-12-31"
            >
              <Github />
            </a>
            <a className="border border-gray-600 p-1 rounded-md" href="">
              <Mail />
            </a>
            <a
              className="border border-gray-600 p-1 rounded-md"
              href="https://www.instagram.com/l.diksha/"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
