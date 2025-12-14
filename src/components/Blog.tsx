import TextType from "./Reactbits/TextType";

export default function Blog() {
  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-8 pt-8 sm:pt-16 pb-8">
      <TextType 
        text="I am human; I am fallible."
        typingSpeed={50}
        showCursor={true}
        cursorCharacter="|"
        loop={false}
        className="text-2xl sm:text-4xl text-center"
      />
    </div>
  );
}
