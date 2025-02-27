import { IoClose } from "react-icons/io5";
import { Bounce, toast, ToastContainer } from "react-toastify";

import { useCartContext } from "../Context/CartContext";
import { Link } from "react-router";
import { useEffect } from "react";

type CartProps = {
  isOpenCartMenu: boolean;
  setIsOpenCartMenu: (value: boolean) => void;
};
export default function Cart(props: CartProps) {
  const { cart, setCart } = useCartContext();

  useEffect(() => {
    if (props.isOpenCartMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [props.isOpenCartMenu]);

  const cartMapped = cart.map((item) => (
    <div
      key={item.id}
      className="flex items-center justify-between bg-[#F3F3F3] border-1 my-2"
    >
      <img src={item.image} className="w-[100px]" />
      <div className="flex flex-col items-end gap-2 p-2 text-[13px]">
        <span>{item.quantity}</span>
        <span>{item.title}</span>
        <span>{(item.quantity ?? 0) * item.price} €</span>
        <button
          className="uppercase font-[700] cursor-pointer hover:text-[#C0BFBF] transition duration-200"
          onClick={() => {
            setCart(cart.filter((product) => product.id !== item.id));
            toast.success(`${item.title} removed from the cart`, {
              position: "bottom-left",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
            localStorage.setItem(
              "cart",
              JSON.stringify(cart.filter((product) => product.id !== item.id))
            );
          }}
        >
          Delete
        </button>
      </div>
    </div>
  ));

  return (
    <>
      <ToastContainer />
      <div
        className="fixed top-0 h-screen right-0 bg-white w-[400px] z-500000 px-[2rem] max-[700px]:w-full  border-l-1"
        style={{
          right: props.isOpenCartMenu ? "0" : "-100%",
          transition: "all 500ms",
        }}
      >
        <div className="flex justify-between items-center p-2.5 mt-6">
          <span className="font-[700] text-[14px] uppercase">
            {cart.length > 0
              ? `YOU HAVE ${cart.length}  ITEM IN YOUR CART`
              : "YOUR CART IS EMPTY"}
          </span>
          <IoClose
            className="border cursor-pointer text-2xl rounded-[4px]"
            onClick={() => props.setIsOpenCartMenu(false)}
          />
        </div>
        <div className="overflow-y-auto h-[80%]">
          {cart.length > 0 ? cartMapped : <div></div>}
        </div>
        <button
          className="border-2 absolute w-[85%] bottom-2.5 border-[#000] p-2.5 uppercase font-[700] cursor-pointer hover:text-[#C0BFBF] hover:bg-black transition duration-200"
          style={{
            display: cart.length > 0 ? "block" : "none",
          }}
        >
          {cart.reduce(
            (acc, item) => acc + item.price * (item.quantity || 1),
            0
          )}{" "}
          €<span>CHECKOUT</span>
        </button>
        <Link to="/shop" onClick={() => props.setIsOpenCartMenu(false)}>
          <button
            className="border-2 absolute w-[85%] top-17 border-[#000] p-2.5 uppercase font-[700] cursor-pointer hover:text-[#C0BFBF] hover:bg-black transition duration-200"
            style={{
              display: cart.length > 0 ? "none" : "block",
            }}
          >
            CONTINUE SHOPPING
          </button>
        </Link>
      </div>
    </>
  );
}
