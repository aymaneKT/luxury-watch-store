import { Link } from "react-router";
import { useProductContext } from "../Context/ProductContext";
export default function Shop() {
  const watches = useProductContext();
  return (
    <div className="mt-[10rem] px-[2rem] mx-[36px]">
      <p className="text-center font-[500] max-[700px]:text-justify">
        **"YOUR BRAND - STORE"** is for those who move with confidence, intrigue
        without effort, and embrace the unknown with excitement. As Baudelaire
        said, *"You should always be drunk."* Drunk on life, passion, and
        fleeting moments—**"YOUR BRAND - STORE"** marks time and memories worth
        keeping.
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,auto))] gap-10 py-[36px] ">
        {watches.map((watch) => (
          <Link key={watch.id} to={`/Product/${watch.id}`}>
            <div className="bg-[#F3F3F3] font-[700] px-[1rem] py-[1rem] cursor-pointer hover:opacity-75 transition duration-100">
              <img src={watch.image} className="object-cover aspect-square" />
              <div className="flex justify-between items-center ">
                <h3>{watch.title}</h3>
                <p>{watch.price}€</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
