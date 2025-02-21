import Header from "./Header";
export default function About() {
  return (
    <>
      <div
        className="h-screen ]"
        style={{
          background: "linear-gradient(90deg, #696666 50%, #B0ADAD 50%)",
        }}
      >
        <Header />
        <div className="w-[80%] text-[25px]  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 max-[752px]:text-[16px] text-white font-[700] font-[Italiana]">
          <span>
            Inspired by the timeless allure of vintage watchmaking, our
            timepieces reinterpret classic codes with bold craftsmanship and a
            rebellious yet sophisticated spirit.
          </span>

          <span>
            A fusion of tradition and innovation, each design balances precision
            engineering with a distinct aesthetic, challenging conventions while
            honoring heritage.
          </span>

          <span>
            Every collection is born from a singular vision, meticulously
            handcrafted with an obsessive attention to detail. Limited to just
            400 pieces, each watch is a statement of individuality—crafted for
            those who dare to stand apart.
          </span>
        </div>
      </div>
    </>
  );
}
