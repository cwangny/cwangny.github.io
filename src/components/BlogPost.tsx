import { useParams } from "react-router-dom";
import AnimatedGradientText from "./AnimatedGradientText";
import NotFound from "./NotFound";

const dummy = `<p>I remember seeing the famous Blue Marble photograph in my science textbook when I was six or seven years old. I was told that the Earth is round—that it is a globe. There was even a globe standing right there in the classroom. Yet at that age, I couldn't quite comprehend how the Earth could possibly be spherical, even while looking at a real image of it. From where I stood, the ground beneath my feet felt flat, so I assumed the Earth must be flat too, with us standing on top of it. I remember thinking that people stood at the North Pole, and I asked my teacher how people at the South Pole didn't fall off. The idea of a spherical planet felt abstract and deeply unintuitive.</p>
      <br/>
      <p>Looking back, I think that confusion—and the desire to resolve it—was when I first fell in love with science. I don't recall the exact moment, but through pure curiosity, and eventually learning about gravity, I began to understand how the Earth could be a sphere and why everything falls toward its center. Throughout primary school and high school, I read textbooks and watched science videos. But at that age, learning science is mostly about memorizing facts and getting good marks. You don't stop to ask what science actually is. You just shut up and calculate. And so, I carried a persistent feeling that I didn't truly understand science, and that there was something deeper I was missing.</p>
      <br/>
      <p>As Richard Feynman said, “If you can't explain something in simple terms, you don't understand it well enough.” That thought lingered in the back of my mind, because I couldn't really explain what science was. As luck would have it, I came across Naval Ravikant, who introduced me to the works of David Deutsch and Brett Hall. That was when things finally clicked. After reading The Beginning of Infinity and listening to numerous podcasts by Brett Hall, I felt—perhaps for the first time—that I understood what science actually is. Deutsch beautifully and elegantly explains the theory of science and epistemology. This is my attempt to explain it.</p>
      <br/>`;

const blogContent = {
  "1": {
    title: "On Science",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    tags: ["Science", "Philosophy", "Epistemology"],
    content: `
      <p>One of the most common experiments a school student performs is heating water. You start at room temperature. Every few seconds, you note the temperature and the time, then plot the results on a graph. As the water heats up, the dots form a straight line, with the temperature rising steadily as time passes. Now imagine extending that line forward and extrapolating it into the future. If the trend continues, the graph suggests that the temperature of the water will rise forever, heading toward infinity as time goes on. But we all know this is false. In reality, something very different happens. When the water reaches 100 °C, it begins to boil. The temperature stops rising. Instead of continuing upward, the graph flattens out as the added energy goes into turning liquid water into water vapor.</p>
      <br/>
      <p> 
      From the data alone, it is impossible to predict the future behavior of the water, and therefore impossible to infer the true behavior. Yet we can explain what happens using our best current theory. Water is made of molecules in constant motion. As heat is added, their average kinetic energy increases. At the boiling point, that energy is no longer used to raise the temperature, but to overcome the intermolecular forces holding the liquid together. Only once the phase change is complete can the temperature rise again.</p>
      <br/>
      <p>
      This simple example, as Brett Hall explains so clearly, captures the true essence of science. Science is not about predicting the future, memorizing facts, or fitting curves to data. It is about creating new knowledge.</P>
      <br/>
      <p>Science is widely seen as a finished textbook of truths—a static collection of facts to be memorized, applied, and used to predict outcomes. In this view, doing science means fitting curves to data, identifying trends, and trusting whichever model best matches past observations. But this picture is false.</p>
      <br/>
      <p>A deeper understanding of science comes from the work of Karl Popper and, more recently, David Deutsch. They argue that the true purpose of science is not prediction nor data fitting, but the creation of new knowledge. Science advances by constructing good, hard-to-vary explanations—explanations that survive sustained criticism rather than merely matching past data. According to Popper and Deutsch's theory of epistemology, new knowledge is created through a process of conjecture and criticism, more precisely:</p>
      <br/>
      <p>Conjecture → Criticism → Error correction</p>
      <br/>
      <p>Let's unpack this process.</p>
      <br/>
      <p>Conjecture comes first. You make a bold guess, an explanation about reality. Not an extrapolation from data, not a trend line extended into the future, but a genuinely new idea. This is the creative part of science. It is deeply human, and even today, no one fully understands how creativity works. Only that it does.</p>
      <br/>
      <p>Next comes criticism. You relentlessly try to find what is wrong with the explanation. You attack it from every angle, logic, counterexamples, competing theories, and experiments. The goal is not to prove the explanation true, but to expose its weaknesses.</p>
      <br/>
      <p>Finally, there is error correction. You modify the explanation, refine it, or replace it entirely in order to remove the errors criticism has uncovered. This is where real progress happens. You iterate again and again until what remains is not certain truth, but the best knowledge available, the explanation that has survived the most severe attempts to refute it.</p>
      <br/>
      <p>The key point is that humans are fallible, and knowledge is fallible. Science does not eliminate fallibility. It harnesses it. And because we can always find better explanations, we can always improve what we currently know.</p>
      <br/>
      <p>A classic example of this process is the progression from Newton's theory of gravity to Einstein's theory of general relativity. Newton's theory was an extraordinarily good explanation. It unified the motion of falling apples and orbiting planets under a single law and worked across an enormous range of everyday conditions. It was hard to vary and highly universal. Yet it contained errors. It could not fully explain anomalies such as the precession of Mercury's orbit, nor did it describe gravity in extreme conditions.</p>
      <br/>
      <p>Einstein did not discard Newton. He explained why Newton's theory worked where it did and why it failed where it did not. General relativity replaced gravity as a force with gravity as the curvature of spacetime, yielding a deeper, more universal, and even harder to vary explanation. This illustrates how scientific knowledge does not get overthrown. It gets improved, with better explanations subsuming older ones rather than erasing them.</p>
      <br/>
      <p>A natural question follows. Why listen to David Deutsch at all? How do we know he is correct? The answer, fittingly, is not because Deutsch is an authority, but because his explanation of science itself is hard to vary. Most importantly, his view does not ask to be accepted on trust. It invites criticism. If a better explanation of how knowledge grows were discovered, it would replace his. Until then, his framework endures for the same reason good scientific theories do. It explains more and breaks less easily than the alternatives.</p>
      <br/>
      <p>Lastly, in an age where, through the internet, currently known knowledge is effectively free, I'm grateful for David Deutsch's explanations and Brett Hall's podcasts, whose depth has helped me seek a deeper understanding of science, reality, and truth itself.</p>
    `,
  },
};

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();

  if (!id || !blogContent[id as keyof typeof blogContent]) {
    return <NotFound />;
  }

  const post = blogContent[id as keyof typeof blogContent];

  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-8 pt-8 sm:pt-16 pb-8">
      <div className="w-full max-w-3xl space-y-8">
        <article className="space-y-6">
          <header className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold">
              <AnimatedGradientText colors={["#40ffaa", "#4079ff", "#40ffaa"]}>
                {post.title}
              </AnimatedGradientText>
            </h1>

            <div className="flex flex-wrap gap-4 text-gray-400">
              {/* <span>{post.date}</span> */}
              {/* <span>•</span> */}
              <span>{post.readTime}</span>
            </div>

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
          </header>

          <div
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}
