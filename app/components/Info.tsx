import info from "../data/info";
import Container from "./Container";

export default function Info() {
  return (
    <Container>
      <div className="grid grid-cols-3 justify-between gap-6 bg-white py-20">
        <div className="flex flex-col justify-between">
          {info.map(
            (item, index) =>
              index < 3 && (
                <div key={item.id}>
                  <h2 className="text-[#3A3A3A] text-3xl text-right font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-base text-gray-400 mt-2.5 text-right pl-5">
                    {item.intro}
                  </p>
                </div>
              )
          )}
        </div>
        <div className="mt-5">
          <img src="./images/top.png" alt="" />
        </div>
        <div className="flex flex-col justify-between">
          {info.map(
            (item, index) =>
              index > 2 && (
                <div key={item.id}>
                  <h2 className="text-[#3A3A3A] text-3xl  font-semibold">
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
  );
}
