import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Navbar from './components/NavBar'
import MainContent from './components/MainContent'
import NotFound from './components/NotFound'
import Blog from './components/Blog';
import Silk from './components/Reactbits/Silk';
import CircularText from './components/Reactbits/CirculatText';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const location = useLocation();

  // Track page views only in production.
  useEffect(() => {
    if (import.meta.env.VITE_GA_MEASUREMENT_ID && import.meta.env.PROD) {
      ReactGA.send({ 
        hitType: "pageview", 
        page: location.pathname,
        title: document.title
      });
    }
  }, [location]);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    const minLoadingTime = 500; // Minimum 500ms loading time

    const img = new Image();
    img.src = "/images/tellos.webp";

    const finishLoading = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => setShowContent(true), 100);
      }, remainingTime);
    };

    img.onload = finishLoading;
    img.onerror = () => {
      console.warn("Image failed to load — continuing anyway");
      finishLoading();
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} duration={500} />;
  }

  return (
    <div className="relative">
      <div className={`relative z-10 transition-all duration-1000 ease-out ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
        <div className="max-w-[1800px] mx-auto p-4">
          <Navbar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>

      <div className={`fixed inset-0 w-screen h-screen transition-opacity duration-1200 ease-out ${showContent ? 'opacity-100' : 'opacity-0'
        }`}>
        <Silk
          speed={5}
          scale={1}
          color={isDark ? "#1A1A1A" : "#FAFAFA"}
          noiseIntensity={0.75}
          rotation={25}
        />
      </div>
    </div>
  );
}

export default App
