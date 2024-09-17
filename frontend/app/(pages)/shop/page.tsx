import Data from "../../data/product";
import Cart from "../../components/Cart";
import BreadCrumb from "../../components/Breadcrumb";
import Container from "../../components/Container";
import { FaSearch } from "react-icons/fa";
import FilterForm from "@/app/components/FilterForm";
import NextPagination from "@/app/components/NextPagination";
export default function Shop() {
  return (

    <section className="py-20 px-3 xl:px-0">
      <Container>
        <BreadCrumb currentPage="Shop" />

        <section>
          <div className="grid grid-cols-4 gap-8 justify-center">
            <div className="col-span-4 xl:col-span-3">
              <div className="flex justify-between items-center">
                <p className="text-lg text-gray-400">
                  Showing 1–12 of 28 results
                </p>
                <select className="border border-black/20 focus:none px-10 py-2 text-black/50 outline-none">
                  <option value="1">one</option>
                  <option value="2">two</option>
                  <option value="3">three</option>
                  <option value="4">four</option>
                </select>
              </div>

              {/* All Products   */}
              <NextPagination itemsPerPage={12} />
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

              {/*====================== Filter by price ======================*/}
              <div>
                <p className="text-xl my-4">Filter by price</p>
                <FilterForm />
              </div>

              {/*=============== All Categories  ===============*/}
              <div>
                <p className="text-xl my-5">Categories</p>
                <ul className="text-base text-black/50 flex flex-col gap-2">
                  <li>Fruit Bowl </li>
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
                {Data?.map(
                  (item, index) =>
                    index > 2 && (
                      <Cart
                        type="horizontal"
                        data={item}
                        key={index}
                        className="mb-5"
                      />
                    )
                )}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
}
