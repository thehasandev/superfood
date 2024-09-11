import BreadCrumb from "../../components/Breadcrumb";
import Container from "../../components/Container";
export default function Shop() {
  return (
    <Container>
      <div className="flex justify-between mt-5 items-center">
        <h1 className="my-20 text-xl font-bold uppercase text-[#444444]">
          Shop
        </h1>
        <BreadCrumb />
      </div>
    </Container>
  );
}
