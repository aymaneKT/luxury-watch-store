import { createContext, useContext } from "react";
import { Watches } from "../Components/ArrayWatches";

type watches = {
  id: string;
  title: string;
  image: string;
  type: string;
  specs: string[];
  description: string;
  price: number;
  quantity?: number;
  forHomePage: boolean;
}[];
export const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <ProductContext.Provider value={Watches}>{children}</ProductContext.Provider>
);

const ProductContext = createContext<watches>([]);

export const useProductContext = () => useContext(ProductContext);
