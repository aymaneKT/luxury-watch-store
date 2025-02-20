type modelsProps = {
  images: string[];
};
export default function Models(props: modelsProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,auto))] gap-10 py-[36px] mx-[36px]">
      {props.images.map((item) => (
        <img key={item} src={item} className="bg-[#F3F3F3] hover:opacity-50 transition duration-300 cursor-pointer object-cover" />
      ))}
    </div>
  );
}
