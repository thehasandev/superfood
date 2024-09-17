import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-40 mb-20 px-3 xl:px-0">
      <div className="flex justify-center items-center relative">
        <Image width={500} height={500} src="/images/not_found.jpg" alt="" />

        <Link href={"/"}>
          <button className="absolute bottom-5 right-[10%] sm:right-[40%] border-red-600 border px-2.5 rounded-[4px] bg-red-600 text-white py-1">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
}
