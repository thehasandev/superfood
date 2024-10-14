"use client";
import { useEffect, useState } from "react";
import Products from "./Products";
import { getData } from "../utils/fetch";

export default function FilterProduct() {
  const [products, setProducts] = useState<any[]>([]);
  const [change, setChange] = useState<number>(200);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getData("product/allproduct");
        if (product) {
          setProducts(product);
        } else {
          throw new Error("No products found");
        }
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProduct();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChange(Number(e.target.value));
  };

  const filteredProducts = products.filter(
    (product) => product.price <= change
  );

  return (
    <div>
      <div className="col-span-4 xl:col-span-3">
        <div className="flex justify-between items-center">
          <p className="text-lg text-gray-400">
            Showing {filteredProducts.length} results
          </p>

          {/* Filter Form */}
          <div>
            <form>
              <div>
                <input
                  type="range"
                  id="vol"
                  name="vol"
                  min={0}
                  max={1000}
                  value={change}
                  onChange={handleInputChange} // Call the handler on change
                  className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <label
                htmlFor="vol"
                className="my-2 items-center text-sm font-medium text-gray-700 flex gap-5 justify-between"
              >
                Price: ${change} — $1000
              </label>
            </form>
          </div>
        </div>

        {/* Display filtered products */}

        {filteredProducts.length > 1 ? (
          <Products data={filteredProducts} />
        ) : (
          <h2 className="text-center text-black/60 text-xl text-bold">
            Product is empty
          </h2>
        )}
      </div>
    </div>
  );
}
