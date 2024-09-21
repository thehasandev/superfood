import { Link } from "react-router-dom";
import NotFount from "./assets/not_found.jpg";
export default function Error() {
  return (
    <div className="mt-40 mb-20 px-3 xl:px-0">
      <div className="flex justify-center items-center relative">
        <img src={NotFount} className="w-[600px]" />

        <Link to={"/"}>
          <button className="absolute bottom-5 right-[10%] sm:right-[40%] border-red-600 border px-2.5 rounded-[4px] bg-red-600 text-white py-1">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
}
