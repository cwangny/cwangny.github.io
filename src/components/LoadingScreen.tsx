import { useEffect, useState } from "react";
import CircularText from "./Reactbits/CirculatText";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  duration?: number;
}

export default function LoadingScreen({
  onLoadingComplete,
  duration = 2000,
}: LoadingScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onLoadingComplete, 800); // Wait for fade out animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg)] transition-all duration-800 ease-out ${
        fadeOut ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
    >
      <CircularText
        text="MISON*CAAMWANG*"
        onHover="goBonkers"
        spinDuration={8}
        className={`transition-all duration-800 ease-out ${
          fadeOut ? "scale-75 opacity-0" : "scale-150 opacity-100"
        }`}
      />
    </div>
  );
}
