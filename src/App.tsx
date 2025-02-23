import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Craftmanship from "./Components/Craftmanship";
import Footer from "./Components/Footer";
import SingleProduct from "./Components/SingleProduct";

function App() {
  return (
    <>
      <Header />
      <SingleProduct />

      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Craftmanship" element={<Craftmanship />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
