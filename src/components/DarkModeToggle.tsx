import { useState, useEffect } from "react";

interface DarkModeToggleProps {
  className?: string;
}

export default function DarkModeToggle({ className = "" }: DarkModeToggleProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleDark}
      aria-label="Toggle dark mode"
      className={`
        relative w-10 h-10 flex items-center justify-center rounded-full
        bg-white/20 backdrop-blur-md shadow-lg 
        hover:bg-white/30 active:scale-95
        transition-all duration-300 cursor-pointer
        ${className}
      `}
    >
      {/* Sun Icon */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center 
          transition-all duration-300
          ${isDark ? "opacity-0 scale-75" : "opacity-100 scale-100"}
        `}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-yellow-400"
        >
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18z" />
        </svg>
      </div>

      {/* Moon Icon */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center 
          transition-all duration-300
          ${isDark ? "opacity-100 scale-100" : "opacity-0 scale-75"}
        `}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-blue-300"
        >
          <path
            fillRule="evenodd"
            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </button>
  );
}
