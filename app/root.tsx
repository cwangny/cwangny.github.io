import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../src/components/NavBar";
import LightPillar from "../src/components/Reactbits/LightPillar";
import Silk from "../src/components/Reactbits/Silk";
import "../src/index.css";

export default function Root() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <title>Mison Caamwang</title>
      </head>
      <body>
        <div className="relative">
          <div className="relative z-10">
            <div className="max-w-[1800px] mx-auto p-4">
              <Navbar />
              <Outlet />
            </div>
          </div>

          <div className="fixed inset-0 w-screen h-screen">
            <Silk
              speed={4}
              scale={1}
              color={isDark ? "#444873" : "#ffffff"}
              noiseIntensity={1}
              rotation={25}
            />
          </div>
        </div>
      </body>
    </html>
  );
}
