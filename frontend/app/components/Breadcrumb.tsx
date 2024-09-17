"use client";
import Link from "next/link";
import { useBradCrumb } from "../breadcumpContext/breadcumpContext";

export default function BreadCrumb({ currentPage }: any) {
  const { active }: any = useBradCrumb();

  return (
    <div className="flex justify-between items-center py-10">
      <h1 className="text-xl font-bold uppercase text-[#444444]">
        {currentPage}
      </h1>
      <ul className="flex gap-2 text-xl font-bold uppercase text-[#444444]">
        <Link href={"/"}>Home /</Link>
        <li>{active && active}</li>
      </ul>
    </div>
  );
}
