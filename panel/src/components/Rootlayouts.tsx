import { Outlet } from "react-router-dom";
// import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Rootlayouts() {
  return (
    <div className="flex gap-5">
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}
