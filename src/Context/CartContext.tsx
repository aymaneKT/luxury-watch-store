import { createContext, useContext, useState, useEffect } from "react";

type Watch = {
  id: string;
  title: string;
  image: string;
  type: string;
  specs: string[];
  description: string;
  price: number;
  quantity?: number;
};

type ContextType = {
  cart: Watch[];
  setCart: (cart: Watch[]) => void;
};

const CartContext = createContext<ContextType>({
  cart: [],
  setCart: () => {},
});

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, setCart] = useState<Watch[]>([]);

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      setCart(JSON.parse(localCart));
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
