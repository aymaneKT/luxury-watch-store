import "./App.css";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Models from "./Components/Models";
import Template from "./Components/Template";
import img from "./Images/jaeger-LeCoultre Master Ultra Thin.jpg";
import moon from "./Images/Moon.webp";
import masterThin from "./Images/Master Ultra Thin.webp";
import masterThinsSecond from "./Images/Master Ultra Thin Small Seconds.webp";
import masterUltraThinPower from "./Images/Master Ultra Thin Power Reserve.webp"
const imagesOfDressWatches = [moon, masterThin, masterThinsSecond,masterUltraThinPower];

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Template
        text="Dress Watch"
        description="The JLC Master Ultra Thin is a sophisticated and impeccably crafted
            timepiece, celebrated for its ultra-slim profile, precision
            mechanical movement, and timeless elegance, making it a hallmark of
            refined watchmaking."
        image={img}
        imageInLeft={true}
      />
      <Models images={imagesOfDressWatches} />
    </>
  );
}

export default App;
