import Container from "../../components/Container";
import BreadCrumb from "../../components/Breadcrumb";
import SingleBlog from "@/app/components/SingleBlog";
import Blogs from "../../data/blog";
console.log(Blogs);

export default function Blog() {
  return (
    <div className="py-20 px-3 xl:px-0">
      <Container>
        <div className="flex justify-between items-center my-10">
          <h1 className="text-xl font-bold uppercase text-[#444444]">Shop</h1>
          <BreadCrumb />
        </div>

        {Blogs.map((blog, index) => (
          <SingleBlog
            key={index}
            src={blog.src}
            header={blog.header}
            title={blog.title}
            description={blog.discription}
          />
        ))}
      </Container>
    </div>
  );
}
