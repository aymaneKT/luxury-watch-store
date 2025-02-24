import HeroSection from "./HeroSection";
import Models from "./Models";
import Template from "./Template";

import rolexSteel from "../Images/Rolex Steel.webp";
import img from "../Images/jaeger-LeCoultre Master Ultra Thin.png";

import iwcBigPilot from "../Images/BigPilotWatch.webp";


export default function HomePage() {

  return (
    <>
        <HeroSection />
        <Template
          title="Dress Watch"
          description="A dress watch is the epitome of elegance—slim, sophisticated, and designed to complement formal attire. With minimalistic dials and refined details, it embodies timeless sophistication."
          image={img}
          imageInLeft
        />
        <Models type="Dress Watch" />
        <Template
          title="Diver’s Watch"
          description="Built for underwater adventures, a diver’s watch is rugged, water-resistant, and highly legible. Its rotating bezel and luminous markers ensure precision and reliability in the depths."
          imageInLeft={false}
          image={rolexSteel}
        />
        <Models type="Diver’s Watch" />
        <Template
          title=" Pilot Watch"
          description="Inspired by aviation, a pilot’s watch features a large, legible dial and practical complications like a GMT or chronograph. Designed for clarity and functionality, it's a symbol of adventure and precision."
          image={iwcBigPilot}
          imageInLeft
        />
        <Models type="Pilot Watch" />
    </>
  );
}
