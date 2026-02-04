import TiltedCard from "./Reactbits/TiltedCard";
import AnimatedGradientText from "./AnimatedGradientText";
import ShinyText from "./Reactbits/ShinyText";
import ReactGA from "react-ga4";

export default function MainContent() {
  const projects = [
    {
      name: "Tellos AI",
      imageSrc: "./images/tellos.webp",
      url: "https://iamtellos.com",
    },
    {
      name: "Deutsch's Academy",
      imageSrc: "./images/dd-assistant.webp",
      url: "https://dd-assistant-client.web.app/",
    },
  ];

  const handleProjectClick = (projectName: string, url: string) => {
    // Track the click event
    if (import.meta.env.VITE_GA_MEASUREMENT_ID && import.meta.env.PROD) {
      ReactGA.event({
        category: "User Interaction",
        action: "Click",
        label: `${projectName} Button`,
      });
    }

    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-8 pt-8 sm:pt-16 pb-8">
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 place-items-center">
        {projects.map((project) => (
          <TiltedCard
            key={project.name}
            imageSrc={project.imageSrc}
            altText={project.name}
            captionText={project.name}
            containerHeight="auto"
            containerWidth="100%"
            imageHeight="auto"
            imageWidth="100%"
            rotateAmplitude={0}
            scaleOnHover={1}
            showMobileWarning={true}
            showTooltip={false}
            displayOverlayContent={true}
            className="w-full"
            overlayContent={
              <div className="text-white">
                <AnimatedGradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa"]}
                >
                  {project.name}
                </AnimatedGradientText>
              </div>
            }
            onOverlayClick={() => handleProjectClick(project.name, project.url)}
          />
        ))}
      </div>

      <ShinyText
        text="More coming soon..."
        disabled={false}
        speed={3}
        className="pt-16 sm:pt-[200px] text-xl sm:text-3xl text-center"
      />
    </div>
  );
}
