import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-16"></div>
      <Outlet />
    </div>
  );
};

export default Main;
