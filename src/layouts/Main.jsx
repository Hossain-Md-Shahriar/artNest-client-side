import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-16"></div>
      <div className="max-w-6xl mx-auto">
        <div className="mx-4">
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
