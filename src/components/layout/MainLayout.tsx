import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer";
import Navber from "../ui/Navber";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
