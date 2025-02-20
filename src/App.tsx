import "./App.css";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Models from "./Components/Models";
import Template from "./Components/Template";
import img from "./Images/jaeger-LeCoultre Master Ultra Thin.png";
import moon from "./Images/Moon.webp";
import masterThin from "./Images/Master Ultra Thin.webp";
import masterThinsSecond from "./Images/Master Ultra Thin Small Seconds.webp";
import masterUltraThinPower from "./Images/Master Ultra Thin Power Reserve.webp";
import rolexSteel from "./Images/Rolex Steel.webp";
import rolexGold from "./Images/Rolex Gold Steel.webp";
import rolexHulk from "./Images/Rolex Hulk.webp";
import rolexDate from "./Images/Rolex Submariner Date.webp";
import rolexVintage from "./Images/Rolex Submariner Vintage.webp";
import iwcBigPilot from "./Images/BigPilotWatch.webp";
import blueIwc from "./Images/blueIwcPilot's Watch.webp";
import brownIwc from "./Images/BrownIwc.webp";
import iwcCronoEdition from "./Images/IWCCronograph.webp";
import IWCWatchMarkXX from "./Images/IWCWatchMarkXX.webp";
import Footer from "./Components/Footer";
const Watches = [
  { image: moon, type: "Dress Watch" },
  { image: masterThin, type: "Dress Watch" },
  { image: masterThinsSecond, type: "Dress Watch" },
  { image: masterUltraThinPower, type: "Dress Watch" },
  { image: rolexGold, type: "Diver’s Watch" },
  { image: rolexHulk, type: "Diver’s Watch" },
  { image: rolexDate, type: "Diver’s Watch" },
  { image: rolexVintage, type: "Diver’s Watch" },
  { image: blueIwc, type: "Pilot Watch" },
  { image: brownIwc, type: "Pilot Watch" },
  { image: iwcCronoEdition, type: "Pilot Watch" },
  { image: IWCWatchMarkXX, type: "Pilot Watch" },
];

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Template
        title="Dress Watch"
        description="The JLC Master Ultra Thin is a sophisticated and impeccably crafted
            timepiece, celebrated for its ultra-slim profile, precision
            mechanical movement, and timeless elegance, making it a hallmark of
            refined watchmaking."
        image={img}
        imageInLeft
      />
      <Models watches={Watches} type="Dress Watch" />
      <Template
        title="Diver’s Watch"
        description="The Rolex Submariner is the ultimate diver’s watch, renowned for its robust construction, timeless design, and exceptional water resistance up to 300 meters. A true icon in the world of luxury sports watches, it combines precision, durability, and elegance, making it a favorite among divers and collectors alike"
        imageInLeft={false}
        image={rolexSteel}
      />
      <Models watches={Watches} type="Diver’s Watch" />
      <Template
        title=" Pilot Watch"
        description="The IWC Big Pilot is an iconic aviation watch, featuring an oversized case, bold legible dial, and signature conical crown. Inspired by WWII pilot watches, it combines precision, durability, and timeless style."
        image={iwcBigPilot}
        imageInLeft
      />
      <Models watches={Watches} type="Pilot Watch" />
      <Footer />
    </>
  );
}

export default App;
