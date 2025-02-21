import Header from "./Header";
import img from "../Images/Craftmanship Image.webp";
import Footer from "./Footer";
export default function Craftmanship() {
  return (
    <>
      <div
        
        style={{
          background: "linear-gradient(90deg, #696666 50%, #B0ADAD 50%)",
        }}
      >
        <Header />

        <div className="flex flex-col items-center w-[70%] m-auto py-12">
          <img src={img} className="w-full my-5" />
          <div className="flex flex-col gap-7 text-justify p-3 font-[Italiana] font-[700] text-white">
            <span>
              This store pushes the boundaries of excellence, crafting each
              timepiece with meticulous precision and masterful craftsmanship.
              Every watch reflects a deep passion for detail, blending heritage
              techniques with modern refinement.
            </span>

            <span>
              This store is an uncompromising bridge between tradition and
              innovation, reinterpreting the past while shaping the future of
              watchmaking. Each design embodies architectural precision,
              engineered to perfection. Honoring centuries-old craftsmanship,
              our watches are a testament to time itself—crafted to endure,
              generation after generation.
            </span>

            <span>
              Seeking only the finest materials, we work with prestigious
              elements such as platinum, titanium, and high-grade mechanical
              movements. Every limited-edition piece is individually numbered
              and accompanied by a metal authentication card, ensuring its
              exclusivity. Timeless elegance, bold character, and distinction
              lie at the heart of this store.
            </span>
          </div>
        </div>
      </div>

    </>
  );
}
