"use client";
import Link from "next/link";
import { useBradCrumb } from "../breadcumpContext/breadcumpContext";

export default function BreadCrumb() {
  const { active }: any = useBradCrumb();

  return (
    <ul className="flex gap-2 text-xl font-bold uppercase text-[#444444]">
      <Link href={"/"}>Home /</Link>
      <li>{active && active}</li>
    </ul>
  );
}
