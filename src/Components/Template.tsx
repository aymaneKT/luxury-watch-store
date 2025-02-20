import icon from "../Images/wristwatch.png";

type templatePrope = {
  image: string;
  title: string;
  description: string;
  imageInLeft: boolean;
};

export default function Template(props: templatePrope) {
  return (
    <div
      className="flex mt-[2rem] py-[36px] mx-[36px] gap-8 "
      style={{
        flexDirection: props.imageInLeft ? "row" : "row-reverse",
      }}
    >
      <img
        src={props.image}
        alt="JLC Master Ultra Thin"
        className="h-[500px] object-cover w-[400px] rounded-[5px]"
      />
      <div className="flex flex-col justify-between">
        <div className="relative flex flex-col items-center gap-[120px]">
          <img src={icon} className="w-[55px] h-[55px] select-none" />
          <div className="bg-black h-[1px] w-[200px] rotate-90 "></div>
        </div>
        <div className="text-center font-[Assistant] mb-[60px]">
          <h1 className="text-[50px] font-[700]"> {props.title} </h1>
          <p className="font-[500] px-[5rem]">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
