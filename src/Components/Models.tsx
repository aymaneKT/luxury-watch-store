import { Link } from "react-router";
import { useHomePageContext } from "../Context/HomePageContext";
console.log(useHomePageContext);

type ModelsProps = {
  type: string;
};

export default function Models(props: ModelsProps) {
  const watches = useHomePageContext();
  return (
    <div className="grid max-[989px]:grid-cols-[repeat(auto-fit,minmax(25vw,auto))] grid-cols-[repeat(auto-fit,minmax(250px,auto))] gap-10 py-[36px] mx-[36px]">
      {watches
        .filter((item) => item.type === props.type)
        .map((item) => (
          <Link key={item.id} to={`/Product/${item.id}`}>
            <img
              src={item.image}
              className="bg-[#F3F3F3] hover:opacity-50 transition duration-300  cursor-pointer object-cover mix-blend-multiply "
            />
          </Link>
        ))}
    </div>
  );
}
