import Container from "@/app/components/Container";
import { AiOutlineCloseSquare, AiOutlineRight } from "react-icons/ai";

export default function page() {
  return (
    <section className="my-24">
      <Container>
        <h2 className="text-3xl font-semibold mb-4">Cart</h2>
        <ul className="bg-ash flex justify-between p-4">
          <li className="font-dm font-bold text-base text-primary">Action</li>
          <li className="font-dm font-bold text-base text-primary">Product</li>
          <li className="font-dm font-bold text-base text-primary">Name</li>
          <li className="font-dm font-bold text-base pl-10 text-primary">
            Price
          </li>
          <li className="font-dm font-bold text-base text-primary">Quantity</li>
          <li className="font-dm font-bold  text-base text-primary">
            Sub Total
          </li>
        </ul>

        <ul className="bg-ash flex items-center  p-4 border-b border-gray">
          <li className="w-[280px] font-dm font-bold text-base text-primary cursor-pointer">
            <AiOutlineCloseSquare size={30} className="text-primary " />
          </li>
          <li className="  font-dm font-bold text-base text-primary">
            {/* <img src={imgUrl} alt="img1" className="w-16" /> */}
          </li>
          <li className="w-[550px] text-center  font-dm font-bold text-base text-primary">
            Hasan
          </li>
          <li className="w-[200px] pl-8  font-dm font-bold text-base  text-primary">
            5000
          </li>
          <li className=" flex  items-center px-1 justify-center gap-5 font-dm border border-primary border-solid ml-24 font-bold text-base text-primary">
            <button className="text-lg text-primary">-</button>5
            <button className="text-lg  text-primary">+</button>
          </li>
          <li className="w-[300px] text-right   font-dm font-bold  text-base text-primary">
            1000
          </li>
        </ul>

        <select className="w-32 border mt-8 border-gray/50">
          <option className="font-dm font-bold text-base text-primary">
            Size
          </option>
          <option className="font-dm font-bold text-base text-primary">
            29
          </option>
          <option className="font-dm font-bold text-base text-primary">
            30
          </option>
          <option className="font-dm font-bold text-base text-primary">
            31
          </option>
        </select>

        <section>
          <h2 className="text-right mt-5">Cart totals</h2>

          <div className="flex justify-end mt-10">
            <table>
              <thead>
                <tr>
                  <th className="border border-gray/50  font-dm font-bold text-base text-primary py-4 px-32">
                    Subtotal
                  </th>
                  <th className="border border-gray/50 font-dm font-normal text-base text-gray py-4 px-32">
                    5000
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border border-gray/50 font-dm font-bold text-base text-primary py-4 px-32">
                    Total
                  </td>
                  <td className="border border-gray/50 font-dm font-bold text-base text-primary py-4 px-32">
                    5000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-end mt-5">
            <button>Proceed to Checkout</button>
          </div>
        </section>
      </Container>
    </section>
  );
}
