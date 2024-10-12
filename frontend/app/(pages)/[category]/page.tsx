import BreadCrumb from "@/app/components/Breadcrumb";
import Cart from "@/app/components/Cart";
import Container from "@/app/components/Container";
import { getData } from "@/app/utils/fetch";

type Params = {
  category: string;
};
async function page({ params }: { params: Params }) {
  const data = await getData(`/product/category?name=${params.category}`);
  console.log(data);

  return (
    <section className="mt-24 px-3 xl:px-0">
      <Container>
        <BreadCrumb currentPage={params.category} />
        <div className="grid grid-cols-12 gap-5">
          {data?.products.map((item: any, index: number) => (
            <Cart
              className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3"
              data={item}
              key={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default page;
