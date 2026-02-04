import TextType from "./Reactbits/TextType";
import BlogCard from "./BlogCard";

const blogPosts = [
  {
    id: "1",
    title: "On Science",
    excerpt: "Explaining what may be humanity's most important creation.",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    tags: ["Science", "Philosophy", "Epistemology"],
  },
];

export default function Blog() {
  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-8 pt-8 sm:pt-16 pb-8">
      <div className="w-full max-w-4xl space-y-12">
        <div className="text-center">
          <TextType
            text="Nullius in verba"
            typingSpeed={50}
            showCursor={true}
            cursorCharacter="|"
            loop={false}
            className="text-2xl sm:text-4xl text-center mb-8"
          />
        </div>

        <div className="grid gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
