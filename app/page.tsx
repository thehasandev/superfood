import Banner from "./components/Banner";
import Counter from "./components/Counter";
import Info from "./components/Info";
import Product from "./components/Product";
import Testomonia from "./components/Testomonia";

export default function Home() {
  return (
    <>
      <Banner />
      <Info />
      <Product />
      <Counter />
      <Testomonia />
    </>
  );
}
