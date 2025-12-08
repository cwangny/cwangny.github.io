import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedGradientText from "./AnimatedGradientText";
import DarkModeToggle from './DarkModeToggle';
import TextType from "./Reactbits/TextType";

export default function Navbar() {
  const [openHamburger, setOpenHamburger] = useState(false);

  return (
    <div className="w-full rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md shadow-lg">
      <nav className="w-full px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold flex gap-2">
          <TextType 
            text={["Mison Caamwang"]}
            typingSpeed={30}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            loop={false}
          />
        </div>

        <div className="hidden md:flex gap-6 items-center">
          <Link to="/">
            <AnimatedGradientText>Projects</AnimatedGradientText>
          </Link>
          <Link to="/blog">
            <AnimatedGradientText>Blog</AnimatedGradientText>
          </Link>
          <DarkModeToggle />
        </div>

        <div className="md:hidden flex items-center gap-3">
          <DarkModeToggle />
          <button
            className="flex flex-col space-y-1 transition-all duration-300 cursor-pointer"
            onClick={() => setOpenHamburger(!openHamburger)}
          >
            <span
              className={`h-0.5 w-6 bg-current transition-all duration-300 ${openHamburger ? "rotate-45 translate-y-1.5" : ""
                }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-current transition-all duration-300 ${openHamburger ? "opacity-0" : ""
                }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-current transition-all duration-300 ${openHamburger ? "-rotate-45 -translate-y-1.5" : ""
                }`}
            ></span>
          </button>
        </div>
      </nav>

      <div
        className={`
    md:hidden overflow-hidden
    transition-all duration-500 ease-in-out delay-75
    ${openHamburger ? "max-h-40 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}
  `}
      >
        <div className="px-4 py-3 flex gap-6 justify-center">
          <Link to="/" className="transition-opacity hover:opacity-80 active:opacity-60 cursor-pointer">
            Projects
          </Link>
          <Link to="/blog" className="transition-opacity hover:opacity-80 active:opacity-60 cursor-pointer">
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
