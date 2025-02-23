import img from "../Images/Rolex Submariner Date.webp";

export default function SingleProduct() {
  return (
    <div className="border border-black mx-[3rem]    flex max-[748px]:flex-col my-[4rem] rounded-[8px] max-[748px]:pb-5 ">
      <img
        src={img}
        alt="test"
        className="bg-[#F3F3F3] object-contain object-center  h-auto  w-1/2  grow max-[748px]:h-[300px]  max-[748px]:w-screen  max-[748px]:rounded-[8px] rounded-t-[8px] rounded-bl-[8px]"
      />
      <div >
        <h1 className="text-center p-4 font-[900] text-3xl font-[Italiana]">
          OROLOGGIO
        </h1>
        <div className="flex flex-col gap-8 px-[9rem]  text-justify max-[989px]:p-3 max-[748px]:h-[300px] max-[748px]:overflow-y-scroll max-[748px]:my-2 py-2 ">
          {/* Description Section */}
          <div className="mb-4">
            <h2 className="text-lg font-[700] mb-2">Description</h2>
            <p>
              This timepiece isn’t just about telling time—it’s about mastering
              it. Precision-engineered and elegantly refined, it embodies
              clarity, control, and an unshakable presence.
            </p>
            <p className="mt-2">
              The dial’s subtle contrasts and meticulous craftsmanship reveal
              sophistication in every second, while its robust mechanics ensure
              unwavering reliability.
            </p>
            <p className="mt-2">
              More than an accessory, it’s a statement of intent—timeless, bold,
              and unwavering.
            </p>
          </div>

          {/* Specs Section */}
          <div>
            <h2 className="text-lg font-[700] mb-2">Specs</h2>
            <ul>
              <li>Swiss automatic movement.</li>
              <li>Brushed stainless steel case.</li>
              <li>Sapphire crystal with anti-reflective coating.</li>
              <li>Water-resistant up to 100m.</li>
            </ul>
            <p className="mt-2">42mm case diameter.</p>
            <p>Limited edition of 400 pieces.</p>
          </div>

          {/* Shopping & Returns Section */}
          <div>
            <h2 className="text-lg font-[700] mb-2">Shopping & Returns</h2>
            <ul>
              <li>Europe: 6-8 business days.</li>
              <li>International: 12-15 business days.</li>
            </ul>
            <p className="mt-2">
              All prices include VAT, sales tax, and customs duties—no
              additional charges upon delivery.
            </p>
            <p className="mt-2">Free returns within the EU.</p>
          </div>

        </div>
          <button className="cursor-pointer my-6 font-[800] uppercase bg-[#F3F3F3] p-3 border border-black hover:bg-black hover:text-white transition duration-300 max-[748px]:w-[90%] relative left-1/2 -translate-x-1/2 w-[70%]">
            787.91€ — Buy now
          </button>
      </div>
    </div>
  );
}
