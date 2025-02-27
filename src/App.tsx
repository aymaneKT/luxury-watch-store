import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Craftmanship from "./Components/Craftmanship";
import Footer from "./Components/Footer";
import SingleProduct from "./Components/SingleProduct";
import Shop from "./Components/Shop";
import { ProductContextProvider } from "./Context/ProductContext";
import { CartContextProvider } from "./Context/CartContext";

function App() {
  return (
    <>
      <CartContextProvider>
        <ProductContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/About" element={<About />} />
            <Route path="Shop" element={<Shop />} />
            <Route path="/Product/:productId" element={<SingleProduct />} />
            <Route path="/Craftmanship" element={<Craftmanship />} />
          </Routes>
          <Footer />
        </ProductContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
