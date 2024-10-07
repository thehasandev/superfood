import Image from "next/image";
import info from "../data/info";
import Container from "./Container";

export default function Info() {
  return (
    <div className="bg-[#F7F5F2] px-3 xl:px-0 mb-8">
      <Container>
        <div className="grid grid-cols-3 justify-between gap-6 py-20">
          <div className="flex flex-col gap-4 justify-between col-span-3 md:col-span-1">
            {info.map(
              (item, index) =>
                index < 3 && (
                  <div key={item.id}>
                    <h2 className="text-[#3A3A3A] text-2xl md:text-3xl md:text-right font-semibold">
                      {item.title}
                    </h2>
                    <p className="text-base text-gray-400 mt-2.5 md:text-right md:pl-5">
                      {item.intro}
                    </p>
                  </div>
                )
            )}
          </div>
          <div className="md:mt-5 col-span-3 md:col-span-1 mx-auto">
            <Image width={300} height={300} src="/images/top.png" alt="" />
          </div>
          <div className="flex flex-col gap-4 justify-between col-span-3 md:col-span-1">
            {info.map(
              (item, index) =>
                index > 2 && (
                  <div key={item.id}>
                    <h2 className="text-[#3A3A3A] text-2xl md:text-3xl  font-semibold">
                      {item.title}
                    </h2>
                    <p className="text-base text-gray-400 mt-2.5  pr-5">
                      {item.intro}
                    </p>
                  </div>
                )
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
