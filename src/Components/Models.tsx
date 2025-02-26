import { Link } from "react-router";
import { useProductContext } from "../Context/ProductContext";


type ModelsProps = {
  type: string;
};

export default function Models(props: ModelsProps) {
  const watches = useProductContext();
  return (
    <div className="grid max-[989px]:grid-cols-[repeat(auto-fit,minmax(25vw,auto))] grid-cols-[repeat(auto-fit,minmax(250px,auto))] gap-10 py-[36px] mx-[36px]">
      {watches
        .filter((item) => item.type === props.type && item.forHomePage)
        .map((item) => (
          <Link key={item.id} to={`/Product/${item.id}`}>
            <img
              src={item.image}
              className="bg-[#F3F3F3]  hover:opacity-50 transition duration-300  cursor-pointer object-cover  "
            />
          </Link>
        ))}
    </div>
  );
}
