import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-full min-h-screen flex flex-col mx-auto">
        <NavBar />
        <div className="mt-4 flex-1 w-11/12 mx-auto">
          <Outlet />
        </div>
        <Footer/>
      </div>

      <Toaster/>
    </div>
  );
};

export default MainLayout;
