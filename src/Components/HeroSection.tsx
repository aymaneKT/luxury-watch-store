import img from "../../public/Images/Watch.jpg";
export default function HeroSection() {
  return (
    <div
      className="absolute top-0 -z-20 bg-amber-400 h-screen w-[100%]"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="absolute select-none left-6/12 top-6/12 transform text-8xl -translate-x-1/2 -translate-y-1/2 text-amber-50 font-[Assistant]">
        YOUR MARK
      </h1>

      <div className="absolute left-[10%] bottom-7 text-white font-[Assistant] text-center ">
        <p className="font-[Italiana]">
          Limited edition watches blend vintage soul with bold
          craftsmanship—rare, numbered, and timeless
        </p>
        <h2 className="font-[700] my-2.5 cursor-pointer  hover:opacity-75 hover:text-[#edede9] transition duration-300">
          SHOP NOW
        </h2>
      </div>
    </div>
  );
}
