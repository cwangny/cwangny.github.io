import { type ReactNode } from 'react';

interface AnimatedGradientTextProps {
  children: ReactNode;
  href?: string;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
}

export default function AnimatedGradientText({
  children,
  href,
  className = '',
  colors = ['#40ffaa', '#4079ff', '#40ffaa'],
  animationSpeed = 2
}: AnimatedGradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`,
    backgroundSize: '300% 100%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text'
  };

  const content = (
    <span className={`group relative hover:opacity-100 ${className}`}>
      <span className="group-hover:opacity-0 transition-opacity duration-200">{children}</span>
      <span 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-transparent animate-gradient flex items-center"
        style={gradientStyle}
      >
        {children}
      </span>
    </span>
  );

  return href ? <a href={href}>{content}</a> : content;
}
