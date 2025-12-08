import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/NavBar'
import MainContent from './components/MainContent'
import Silk from './components/Reactbits/Silk';

function Blog() {
  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-8 pt-8 sm:pt-16 pb-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <p className="text-lg text-center">Blog posts coming soon...</p>
    </div>
  );
}

function App() {
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

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

  const showSilk = location.pathname !== '/blog';

  return (
    <div className="relative">
      <div className="relative z-10">
        <div className="max-w-[1800px] mx-auto p-4">
          <Navbar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </div>

      {showSilk && (
        <div className="fixed inset-0 w-screen h-screen">
          <Silk
            speed={4}
            scale={1}
            color={isDark ? "#444873" : "#ffffff"}
            noiseIntensity={1}
            rotation={25}
          />
        </div>
      )}
    </div>
  );
}

export default App
