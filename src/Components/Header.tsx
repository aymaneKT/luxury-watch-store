import { useState } from "react";
import Checkbox from "./Checkbox";

export default function Header() {
  const [isOpenListMenu, setIsopenListMenu] = useState<boolean>(false);
  return (
    <div className="font-[900] py-[30px] px-[65px] text-[#fff]  font-[Assistant] tracking-[0.6px] items-center  w-[90%] relative">
      <Checkbox
        isOpenListMenu={isOpenListMenu}
        setIsopenListMenu={setIsopenListMenu}
      />
      <div
        style={{
          left: isOpenListMenu ? "0" : "-100%",
          transition: "all 500ms",
        }}
        className="flex justify-between max-[989px]:fixed max-[989px]:top-0  max-[989px]:bg-[#F0F8FF] max-[989px]:h-screen max-[989px]:text-[#000]  max-[989px]:flex-col max-[989px]:justify-start gap-[30px] max-[989px]:w-[100%] z-1 "
      >
        <ul className="flex   gap-[30px] items-center max-[989px]:flex-col max-[989px]:mt-[4rem] ">
          <li className="cursor-pointer hover:opacity-75 max-[989px]:hover:text-[#C0C0C0] max-[989px]:hover:opacity-100 hover:text-[#edede9] transition duration-300 ">
            SHOP
          </li>
          <li className="cursor-pointer hover:opacity-75 max-[989px]:hover:text-[#C0C0C0] max-[989px]:hover:opacity-100 hover:text-[#edede9] transition duration-300 ">
            ABOUT
          </li>
          <li className="cursor-pointer hover:opacity-75 max-[989px]:hover:text-[#C0C0C0] max-[989px]:hover:opacity-100 hover:text-[#edede9] transition duration-300 ">
            EDITORIAL
          </li>
        </ul>
        <ul className="flex gap-[30px] items-center max-[989px]:flex-col">
          <li className="cursor-pointer hover:opacity-75 max-[989px]:hover:text-[#C0C0C0] max-[989px]:hover:opacity-100 hover:text-[#edede9] transition duration-300 ">
            CRAFTMANSHIP
          </li>
          <li className="cursor-pointer hover:opacity-75 max-[989px]:hover:text-[#C0C0C0] max-[989px]:hover:opacity-100 hover:text-[#edede9] transition duration-300 ">
            STOCKIST
          </li>
          <li className="cursor-pointer hover:opacity-75 max-[989px]:hover:text-[#C0C0C0] max-[989px]:hover:opacity-100 hover:text-[#edede9] transition duration-300 ">
            CART
          </li>
        </ul>
      </div>
      <div className="h-[30px] w-[30px] border-2 flex justify-center items-center rounded-[8px]  absolute right-0 top-[50%] -translate-y-[50%]">
        2
      </div>
    </div>
  );
}
