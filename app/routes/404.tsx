import { Link } from "react-router";
import AnimatedGradientText from "../../src/components/AnimatedGradientText";
import ShinyText from "../../src/components/Reactbits/ShinyText";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-8 pt-8 sm:pt-16 pb-8 min-h-[60vh]">
      <div className="text-center space-y-8">
        <div className="text-8xl sm:text-9xl font-bold opacity-20">404</div>

        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">
            <AnimatedGradientText colors={["#ff4040", "#ff9f40", "#ff4040"]}>
              Page Not Found
            </AnimatedGradientText>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <AnimatedGradientText>Go Home</AnimatedGradientText>
          </Link>

          <Link
            to="/blog"
            className="px-6 py-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            Visit Blog
          </Link>
        </div>

        <div className="pt-8">
          <ShinyText
            text="Lost in space? 🚀"
            disabled={false}
            speed={2}
            className="text-sm sm:text-base text-gray-500"
          />
        </div>
      </div>
    </div>
  );
}
