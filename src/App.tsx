import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Craftmanship from "./Components/Craftmanship";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Craftmanship" element={<Craftmanship />} />
      </Routes>
    </>
  );
}

export default App;
