"use client";
import Container from "./Container";
import CountUp from "react-countup";

export default function Counter() {
  return (
    <div className="relative bg-counter bg-cover bg-no-repeat">
      <div className="py-16 bg-black/40 text-white">
        <Container>
          <div className="grid grid-cols-4">
            <div className="text-center flex items-center justify-center flex-col">
              <img src="./images/c1.png" alt="c1" />
              <h2 className="text-2xl md:text-4xl font-bold my-2">
                <CountUp end={4452} duration={20} />
              </h2>
              <p className="text-xs md:text-xl md:font-semibold">Icon Collections</p>
            </div>
            <div className="text-center flex items-center justify-center flex-col">
              <img src="./images/c2.png" alt="c1" />
              <h2 className="text-2xl md:text-4xl font-bold my-2">
                <CountUp end={5555} duration={20} />
              </h2>
              <p className="text-xs md:text-xl md:font-semibold">Masonry Layouts</p>
            </div>
            <div className="text-center flex items-center justify-center flex-col">
              <img src="./images/c3.png" alt="c1" />
              <h2 className="text-2xl md:text-4xl font-bold my-2">
                <CountUp end={6560} duration={20} />
              </h2>
              <p className="text-xs md:text-xl md:font-semibold">Only The Best</p>
            </div>
            <div className="text-center flex items-center justify-center flex-col">
              <img src="./images/c4.png" alt="c1" />
              <h2 className="text-2xl md:text-4xl font-bold my-2">
                <CountUp end={9999} duration={20} />
              </h2>
              <p className="text-xs md:text-xl md:font-semibold">Elated Design</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
