import { useParams } from "react-router";
import { useHomePageContext } from "../Context/HomePageContext";
import { useCartContext } from "../Context/CartContext";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function SingleProduct() {
  const { productId } = useParams();
  const watches = useHomePageContext();
  const { cart, setCart } = useCartContext();
  const mainProduct = watches.find((item) => item.id === productId);

  if (!mainProduct) {
    return <div>Product not found</div>;
  }

  function handleAddToCart() {
    if (!mainProduct) return;

    const itemInCart = cart.find((item) => item.id === mainProduct.id);

    let updatedCart = [];
    if (itemInCart) {
      updatedCart = cart.map((item) =>
        item.id === mainProduct.id
          ? { ...item, quantity: item.quantity ? item.quantity + 1 : 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...mainProduct, quantity: 1 }];
    }

    setCart(updatedCart);
    toast.success(`${mainProduct.title} has been added to your cart!!`, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  return (
    <>
      <ToastContainer />
      <div className="border border-black mx-[3rem] flex max-[748px]:flex-col my-[5rem] rounded-[8px] max-[748px]:pb-5 max-[500px]:mx-[1rem]">
        <img
          src={mainProduct.image}
          alt="test"
          className="bg-[#F3F3F3] object-contain object-center  h-auto  w-1/2  grow max-[748px]:h-[300px]  max-[748px]:w-screen  max-[748px]:rounded-[8px] rounded-t-[8px] rounded-bl-[8px]"
        />
        <div>
          <h1 className="text-center p-4 font-[900] text-3xl font-[Italiana]">
            {mainProduct.title}
          </h1>
          <div className="flex flex-col gap-8 px-[9rem]  text-justify max-[989px]:p-3 max-[748px]:h-[300px] max-[748px]:overflow-y-scroll max-[748px]:my-2 py-2 ">
            {/* Description Section */}
            <div className="mb-4">
              <h2 className="text-lg font-[700] mb-2">Description</h2>
              <p>{mainProduct.description}</p>
            </div>

            {/* Specs Section */}
            <div>
              <h2 className="text-lg font-[700] mb-2">Specs</h2>
              <ul>
                {mainProduct.specs.map((spec) => (
                  <li>{spec}</li>
                ))}
              </ul>
            </div>

            {/* Shopping & Returns Section */}
            <div>
              <h2 className="text-lg font-[700] mb-2">Shopping & Returns</h2>
              <ul>
                <li>Europe: 6-8 business days.</li>
                <li>International: 12-15 business days.</li>
              </ul>
              <p className="mt-2">
                All prices include VAT, sales tax, and customs duties—no
                additional charges upon delivery.
              </p>
              <p className="mt-2">Free returns within the EU.</p>
            </div>
          </div>
          <button
            className="cursor-pointer my-6 font-[800] uppercase bg-[#F3F3F3] p-3 border border-black hover:bg-black hover:text-white transition duration-300 max-[748px]:w-[90%] relative left-1/2 -translate-x-1/2 w-[70%]"
            onClick={handleAddToCart}
          >
            {mainProduct.price}€ — Buy now
          </button>
        </div>
      </div>
    </>
  );
}
