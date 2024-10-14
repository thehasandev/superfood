import Container from "@/app/components/Container";

function page() {
  return (
    <div className="my-24 px-3 xl:px-0">
      <Container>
        <h1 className="text-2xl font-bold uppercase text-[#444444] my-4">
          Checkout
        </h1>

        <h2 className="text-xl font-semibold mb-6">Billing Details</h2>

        <div className="grid grid-cols-6 gap-10 pb-32">
          <div className="col-span-6 xl:col-span-3">
            <p className="mb-1.5">First Name *</p>
            <input
              type="text"
              placeholder="First Name"
              className="border-b border-b-black/20 px-5 py-2 rounded-sm w-full"
            />
          </div>

          <div className="col-span-6 xl:col-span-3">
            <p className="mb-1.5">Last Name *</p>
            <input
              type="text"
              placeholder="Last Name"
              className="border-b border-gray-700/50 px-5 py-2 rounded-sm w-full"
            />
          </div>

          <div className="col-span-6">
            <p className="mb-1.5">Company Name (optional)</p>
            <input
              type="text"
              placeholder="Company Name"
              className="border-b border-gray-700/50 px-5 py-2 rounded-sm w-full"
            />
          </div>

          <div className="col-span-6">
            <div>
              <p className="mb-1.5">Country</p>
              <input
                type="text"
                placeholder="Country"
                className="border-b border-gray-700/50 px-5 py-2 rounded-sm w-full"
              />
            </div>
          </div>

          <div className="col-span-6">
            <div>
              <p className="mb-1.5">Street Address</p>
              <input
                type="text"
                placeholder="House number and street name"
                className="border-b border-gray-700/50 px-5 py-2 rounded-sm w-full"
              />
            </div>
          </div>

          <div className="col-span-6">
            <p className="mb-1.5">Town/City</p>
            <input
              type="text"
              placeholder="Town/City"
              className="border-b border-gray-700/50 px-5 py-2 rounded-sm w-full"
            />
          </div>

          <div className="col-span-6">
            <p className="mb-1.5">Country Optional</p>
            <input
              type="text"
              placeholder="Country"
              className="border-b border-gray-700/50 px-5 py-2 rounded-sm w-full"
            />
          </div>

          <div className="col-span-6">
            <p className="mb-1.5">Post Code *</p>
            <input
              type="text"
              placeholder="Post Code"
              className="border-b border-gray-700/50 px-5 py-2 rounded-sm w-full"
            />
          </div>

          <div className="col-span-6">
            <p className="mb-1.5">Phone *</p>
            <input
              type="text"
              placeholder="Phone"
              className="border-b border-gray-700/50 px-5 py-2 rounded-sm w-full"
            />
          </div>

          <div className="col-span-6">
            <p className="mb-1.5">Email Address *</p>
            <input
              type="email"
              placeholder="Email Address"
              className="border-b border-gray-700/50 px-5 py-2 rounded-sm w-full"
            />
          </div>
        </div>

        <h2>Additional Information</h2>

        <div className="w-full mb-2.5 mt-10">
          <div className="w-full">
            <p className="mb-1.5">Other Notes (optional)</p>
            <input
              type="text"
              placeholder="Notes about your order, e.g. special notes for delivery."
              className="border-b border-gray-700/50 px-5 py-2 rounded-sm w-full"
            />
          </div>
        </div>

        <h2 className="text-xl my-8">Your Order</h2>
        <table>
          <thead>
            <tr>
              <th className="border-b border-b-gray font-bold text-base text-primary py-4 xl:px-32">
                Product
              </th>
              <th className="border-b border-b-gray font-normal text-base text-gray py-4 xl:px-32">
                Total
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border-b border-b-gray font-bold text-base text-primary py-4 px-5 xl:px-32">
                Product name x 1
              </td>
              <td className="border-b border-b-gray font-normal text-base text-gray py-4 px-5 xl:px-32">
                389.99 $
              </td>
            </tr>

            <tr>
              <td className="border-b border-b-gray font-bold text-base text-primary py-4 px-5 xl:px-32">
                Subtotal
              </td>
              <td className="border-b border-b-gray font-normal text-base text-gray py-4 px-5 xl:px-32">
                389.99 $
              </td>
            </tr>

            <tr>
              <td className="border-b border-b-gray font-bold text-base text-primary py-4 px-5 xl:px-32">
                Total
              </td>
              <td className="border-b border-b-gray font-normal text-base text-gray py-4 px-5 xl:px-32">
                389.99 $
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  );
}

export default page;
