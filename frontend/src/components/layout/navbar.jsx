import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <nav className="bg-white dark:bg-gray-900 shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="text-xl font-bold text-gray-800 dark:text-white"
          >
            Diksh@
          </Link>
          <ul className="hidden md:flex space-x-6">
            {[
              { name: "About", path: "/about" },
              { name: "My Work", path: "/work" },
              { name: "Contact", path: "/contact" },
            ].map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md"
          >
            {darkMode ? (
              <Sun className="text-yellow-400" />
            ) : (
              <Moon className="text-gray-700" />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}
