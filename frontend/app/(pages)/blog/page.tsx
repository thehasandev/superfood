import Container from "../../components/Container";
import SingleBlog from "@/app/components/SingleBlog";
import Blogs from "../../data/blog";

export default function Blog() {
  return (
    <div className="py-20 px-3 xl:px-0">
      <Container>
        <h1 className="text-xl font-bold uppercase text-[#444444] my-4">
          Blog
        </h1>
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
