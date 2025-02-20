export default function Header() {
  return (
    <div className="flex justify-between py-[30px] px-[50px] text-[#fff] mx-[65px] font-[Assistant] tracking-[0.6px] items-center w-[90%] absolute">
      <ul className="flex font-[900] gap-[30px] items-center">
        <li className="cursor-pointer hover:opacity-75 hover:text-[#edede9] transition duration-300 ">
          SHOP
        </li>
        <li className="cursor-pointer hover:opacity-75 hover:text-[#edede9] transition duration-300 ">
          ABOUT
        </li>
        <li className="cursor-pointer hover:opacity-75 hover:text-[#edede9] transition duration-300 ">
          EDITORIAL
        </li>
      </ul>
      <ul className="flex font-[900] gap-[30px] items-center">
        <li className="cursor-pointer hover:opacity-75 hover:text-[#edede9] transition duration-300 ">
          CRAFTMANSHIP
        </li>
        <li className="cursor-pointer hover:opacity-75 hover:text-[#edede9] transition duration-300 ">
          STOCKIST
        </li>
        <li className="cursor-pointer hover:opacity-75 hover:text-[#edede9] transition duration-300 ">
          CART
        </li>
        <div className="h-[30px] w-[30px] border-2 flex justify-center items-center rounded-[8px]">
          2
        </div>
      </ul>
    </div>
  );
}
