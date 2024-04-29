import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div className="font-lora dark:bg-[#101010]">
      <Navbar />
      <div className="mt-20"></div>
      <Outlet />
    </div>
  );
};

export default Main;
