import Banner from "./components/Banner";
import Counter from "./components/Counter";
import Gallery from "./components/Gallery";
import Info from "./components/Info";
import Product from "./components/Product";
import Rating from "./components/Rating";
import Slider from "./components/Slider";
import Testomonia from "./components/Testomonia";

export default function Home() {
  return (
    <>
      <Banner />
      <Info />
      <Product />
      <Counter />
      <Testomonia />
      <Slider />
      <Rating />
      <Gallery />
    </>
  );
}
