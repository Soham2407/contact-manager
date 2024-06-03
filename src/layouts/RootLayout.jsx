import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <div className="max-w-[1280px] mx-auto ">
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
