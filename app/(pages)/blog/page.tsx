import Container from "../../components/Container";
import BreadCrumb from "../../components/Breadcrumb";
import SingleBlog from "@/app/components/SingleBlog";
import Blogs from "../../data/blog";



export default function Blog() {
  return (
    <div className="py-20 px-3 xl:px-0">
      <Container>
        <BreadCrumb currentPage="Blog" />

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
