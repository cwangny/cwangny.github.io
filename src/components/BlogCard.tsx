import { Link } from 'react-router-dom';
import ReactGA from 'react-ga4';
import AnimatedGradientText from './AnimatedGradientText';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const handleBlogClick = () => {
    if (import.meta.env.VITE_GA_MEASUREMENT_ID && import.meta.env.PROD) {
      ReactGA.event({
        category: 'Blog',
        action: 'Click',
        label: post.title,
        value: 1
      });
    }
  };

  return (
    <Link 
      to={`/blog/${post.id}`}
      onClick={handleBlogClick}
      className="group block p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-[1.02]"
    >
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div className="text-sm text-gray-400">
            {/* {post.date} • {post.readTime} */}
            {post.readTime}
          </div>
        </div>
        
        <h2 className="text-xl sm:text-2xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
          {post.title}
        </h2>
        
        <p className="text-gray-300 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 text-xs bg-white/10 rounded-full border border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="pt-2">
          <AnimatedGradientText colors={['#40ffaa', '#4079ff', '#40ffaa']}>
            Read more →
          </AnimatedGradientText>
        </div>
      </div>
    </Link>
  );
}
