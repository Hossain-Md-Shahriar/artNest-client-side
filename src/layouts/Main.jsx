import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div className="font-lora">
      <Navbar />
      <div className="mt-20"></div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
