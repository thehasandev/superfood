import Cart from "./Cart";
import Container from "./Container";

interface ProductProps {
  data: any; // This should be typed based on the shape of your data
  title: string;
  intro: string;
}

export default function Product({ data, title, intro }: ProductProps) {
  return (
    <div className="py-10 px-3 xl:px-0">
      <div>
        <h2 className="text-4xl mb-2 text-primary font-bold text-center">
          {title}
        </h2>
        <h2 className="md:text-xl mb-8 text-primary text-center md:w-7/12 mx-auto">
          {intro}
        </h2>
      </div>
      <Container>
        <div className="grid grid-cols-4 gap-5  justify-center">
          {data?.map((item: any, index: number) => (
            <Cart
              data={item}
              key={index}
              className="col-span-4 min-[460px]:col-span-2  sm:col-span-2 md:col-span-1"
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
