import TiltedCard from "./Reactbits/TiltedCard";
import AnimatedGradientText from "./AnimatedGradientText";
import ShinyText from "./Reactbits/ShinyText";

export default function MainContent() {
  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-8 pt-8 sm:pt-16 pb-8">
      <TiltedCard
        imageSrc="./images/tellos.webp"
        altText="Tellos AI"
        captionText="Tellos AI"
        containerHeight="auto"
        containerWidth="min(90vw, 960px)"
        imageHeight="auto"
        imageWidth="min(90vw, 960px)"
        rotateAmplitude={5}
        scaleOnHover={1.075}
        showMobileWarning={true}
        showTooltip={false}
        displayOverlayContent={true}
        overlayContent={
          <div className="text-white">
            <AnimatedGradientText colors={['#40ffaa', '#4079ff', '#40ffaa']}>
              Tellos AI
            </AnimatedGradientText>
          </div>
        }
      />

      <ShinyText 
        text="More coming soon..."
        disabled={false}
        speed={3}
        className="pt-16 sm:pt-[200px] text-xl sm:text-3xl text-center"
      />
    </div>
  );
}
