import Cart from "../../components/Cart";
import Container from "../../components/Container";
import { FaSearch } from "react-icons/fa";
import { getData } from "@/app/utils/fetch";
import FilterProduct from "@/app/components/FilterProduct";

export default async function Shop() {
  // Fetching all products
  const data = await getData("/product/allproduct");

  return (
    <section className="py-20 px-3 xl:px-0">
      <Container>
        <h1 className="text-xl font-bold uppercase text-[#444444] my-4">
          Shop
        </h1>

        <section>
          <div className="grid grid-cols-4 gap-8 justify-center">
            <div className="col-span-4 xl:col-span-3">
              <FilterProduct />
            </div>

            {/*=============== Search Product  ================*/}
            <div className="col-span-4 xl:col-span-1">
              <p className="text-xl mb-4">Search</p>
              <div className="relative">
                <input
                  type="text"
                  className="w-full border border-black/20 px-4 py-2 outline-none"
                  placeholder="Search Product"
                />
                <FaSearch className="absolute top-1/2 -translate-y-1/2 right-4 text-black/25" />
              </div>

              {/*=============== All Categories  ===============*/}
              <div>
                <p className="text-xl my-5">Categories</p>
                <ul className="text-base text-black/50 flex flex-col gap-2">
                  <li>Fruit Bowl</li>
                  <li>Ice Cream</li>
                  <li>Shake</li>
                  <li>Smoothie</li>
                  <li>Spa</li>
                  <li>Tea</li>
                  <li>Uncategorized</li>
                </ul>
              </div>

              {/*================ Rated Products =================*/}
              <div>
                <p className="text-xl my-5">Top Rated Products</p>
                {data.map((item:any) => (
                  <Cart type="horizontal" key={item._id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
}
