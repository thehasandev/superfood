"use client"; // Make sure this is marked as a client component
import { useEffect, useState } from "react"; // Import useState and useEffect
import Cart from "../../components/Cart";
import BreadCrumb from "../../components/Breadcrumb";
import Container from "../../components/Container";
import { FaSearch } from "react-icons/fa";
import FilterForm from "@/app/components/FilterForm";
import NextPagination from "@/app/components/NextPagination";
import { getData } from "@/app/utils/fetch";

export default function Shop() {
  const [products, setProducts] = useState([]); // Stores all products
  const [filterProduct, setFilterProduct] = useState([]); // Stores filtered products
  const [filterChange, setFilterChange] = useState(""); // Stores filter value

  // Fetch products once on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getData("/product/allproduct");
        setProducts(fetchedProducts); // Set all products
        setFilterProduct(fetchedProducts); // Set default filtered products to all products
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };

    fetchProducts();
  }, []); // Run only once on mount

  // Apply filter when `filterChange` or `products` changes
  useEffect(() => {
    if (filterChange) {
      const filtered = products.filter(
        (product: any) => product.price < filterChange
      );
      setFilterProduct(filtered); // Set filtered products
    } else {
      setFilterProduct(products); // Reset to all products when no filter is applied
    }
  }, [filterChange, products]);

  return (
    <section className="py-20 px-3 xl:px-0">
      <Container>
        <BreadCrumb currentPage="Shop" />

        <section>
          <div className="grid grid-cols-4 gap-8 justify-center">
            <div className="col-span-4 xl:col-span-3">
              <div className="flex justify-between items-center">
                <p className="text-lg text-gray-400">
                  Showing 1–12 of {filterProduct.length} results {/* Show filtered product count */}
                </p>
                <div>
                  <FilterForm onChange={setFilterChange} /> {/* Filter form */}
                </div>
              </div>

              {/* Show filtered products or empty message */}
              {filterProduct.length > 0 ? (
                <NextPagination data={filterProduct} />
              ) : (
                <p className="text-center text-gray-500 mt-10">
                  No products found matching your filter.
                </p>
              )}
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
                {products?.map(
                  (item: any, index: number) =>
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
