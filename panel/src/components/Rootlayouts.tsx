import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import User from "./User";

export default function Rootlayouts() {
  return (
    <div className="flex md:gap-5">
      <Navbar />
      <div className="w-full">
        <User />
        <Outlet />
      </div>
    </div>
  );
}
