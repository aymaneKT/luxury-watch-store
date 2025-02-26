import { useState } from "react";
import Checkbox from "./Checkbox";
import { Link } from "react-router";
import { useLocation } from "react-router";
import { useCartContext } from "../Context/CartContext";
import Cart from "./Cart";

export default function Header() {
  const { cart } = useCartContext();
  const location = useLocation();
  const [isOpenCartMenu, setIsOpenCartMenu] = useState<boolean>(false);
  const [isOpenListMenu, setIsopenListMenu] = useState<boolean>(false);
  const menuItems = ["Home", "Shop", "About", "Craftmanship", "Cart"];

  const isWhite: boolean =
    !isOpenListMenu &&
    (location.pathname.includes("/about") ||
      location.pathname === "/" ||
      location.pathname.includes("/home"));

  return (
    <>
      <Cart
        isOpenCartMenu={isOpenCartMenu}
        setIsOpenCartMenu={setIsOpenCartMenu}
      />
      <div className="font-[900] py-[30px] px-[65px] text-[#fff] font-[Assistant] tracking-[0.6px] items-center w-[90%] absolute top-0">
        <Checkbox
          isOpenListMenu={isOpenListMenu}
          setIsopenListMenu={setIsopenListMenu}
        />
        <div
          style={{
            left: isOpenListMenu ? "0" : "-100%",
            transition: "all 500ms",
          }}
          className="flex  text-white justify-between max-[989px]:fixed max-[989px]:top-0 max-[989px]:bg-[#F0F8FF] max-[989px]:h-screen max-[989px]:text-[#000] max-[989px]:flex-col max-[989px]:justify-start gap-[30px] max-[989px]:w-[100%] z-1"
        >
          {/* Prima lista */}
          <ul
            className={`flex gap-[30px] items-center max-[989px]:flex-col max-[989px]:mt-[4rem] 
            }`}
          >
            {menuItems.slice(0, 3).map((item, index) => (
              <li
                key={index}
                className="cursor-pointer  max-[989px]:hover:text-[#a29f9f] max-[989px]:hover:opacity-100 hover:text-[#edede9] transition duration-300"
                onClick={() => {
                  setIsopenListMenu(!isOpenListMenu);
                }}
              >
                <Link
                  className={`${isWhite ? "text-white" : "text-black"}`}
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setIsOpenCartMenu(false)}
                >
                  {item.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>

          {/* Seconda lista */}
          <ul
            className="flex gap-[30px]  items-center max-[989px]:flex-col"
            style={{
              color: isWhite ? "white" : "black",
            }}
          >
            {menuItems.slice(3).map((item, index) =>
              item !== "Cart" ? (
                <li
                  key={index + 3}
                  className="cursor-pointer  max-[989px]:hover:text-[#BEBFC5] max-[989px]:hover:opacity-100 hover:text-[#edede9] transition duration-300"
                  onClick={() => {
                    setIsopenListMenu(!isOpenListMenu);
                  }}
                >
                  <Link to={`/${item.toLowerCase()}`}>
                    {item.toUpperCase()}
                  </Link>
                </li>
              ) : (
                <li
                  className="cursor-pointer max-[989px]:hidden"
                  onClick={() => {
                    setIsOpenCartMenu(!isOpenCartMenu);
                  }}
                >
                  {item.toUpperCase()}
                </li>
              )
            )}
          </ul>
        </div>
        <div
          className="h-[30px] w-[30px] border-2 flex justify-center items-center cursor-pointer rounded-[8px] absolute right-0 top-[50%] -translate-y-[50%]"
          style={{
            color: isWhite ? "white" : "black",
          }}
          onClick={() => {
            setIsOpenCartMenu(!isOpenCartMenu);
          }}
        >
          {cart.length}
        </div>
      </div>
    </>
  );
}
