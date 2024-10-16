import Banner from "./components/Banner";
import Counter from "./components/Counter";
import Gallery from "./components/Gallery";
import Info from "./components/Info";
import Product from "./components/Product";
import Rating from "./components/Rating";
import Slider from "./components/Slider";
import Testomonia from "./components/Testomonia";
import { getData } from "./utils/fetch";

export default async function Home() {
  const [alldata, coffeData, burgerData, pizzaData] = await Promise.all([
    getData("/product/allproduct"),
    getData("/product/category?name=Coffee"),
    getData("/product/category?name=Burger"),
    getData("/product/category?name=Pizza"),
    getData("/product/category?name=Tea"),
  ]);

  return (
    <>
      <Banner />
      <Info />

      {/*====================== For coffee  ====================*/}
      <Product
        data={coffeData?.products}
        title="Awaken Your Senses: The Art of Coffee"
        intro="Indulge in the rich aroma and bold flavors of freshly brewed coffee. Whether you crave a smooth latte or a robust espresso, our selection has something for every coffee lover."
      />

      {/*====================== For coffee  =====================*/}
      {/*====================== For burger  =====================*/}
      <Product
        data={burgerData?.products}
        title="The Craft of Gourmet Burgers"
        intro="Dive into a world of mouthwatering perfection with our expertly crafted burgers. From juicy beef patties to creative toppings, each bite offers a savory experience that satisfies every burger lover's craving."
      />

      {/*====================== For burger  =====================*/}

      {/*====================== For pizza  =====================*/}
      <div>
        <Product
          data={pizzaData?.products}
          title="The Craft of Gourmet Pizzas"
          intro="Savor the irresistible flavors and delightful textures of our gourmet pizzas. Whether you crave a classic Margherita or a bold BBQ chicken, our selection takes you on a delicious journey through the world of artisan pizza-making."
        />
      </div>
      {/*====================== For pizza  =====================*/}

      {/*====================== For tea  =====================*/}
      <div>
        {/* <Product
          data={TeaData.products}
          title="The Elegance of Exquisite Tea"
          intro="Immerse yourself in the soothing world of fine teas. From fragrant blends to delicate flavors, each sip provides a calming experience that delights every tea enthusiast's palate."
        /> */}
      </div>
      {/*====================== For tea  =====================*/}

      <Counter />
      <Testomonia />
      <Slider />
      <Rating />
      <Gallery data={alldata} />
    </>
  );
}
