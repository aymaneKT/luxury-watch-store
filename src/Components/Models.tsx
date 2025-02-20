type modelsProps = {
  watches: {
    image: string;
    type: string;
  }[];
  type: string;
};

export default function Models(props: modelsProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,auto))] gap-10 py-[36px] mx-[36px]">
      {props.watches
        .filter((item) => item.type === props.type)
        .map((item) => (
          <img
            key={item.image}
            src={item.image}
            className="bg-[#F3F3F3] hover:opacity-50 transition duration-300  cursor-pointer object-cover mix-blend-multiply"
          />
        ))}
    </div>
  );
}
