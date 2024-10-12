import Image from "next/image";

interface SingleBlogProps {
  src: string;
  header: string;
  title: string;
  description: string;
  alt?: string;
}

export default function SingleBlog({
  src,
  alt = "alt",
  header,
  title,
  description,
}: SingleBlogProps) {
  return (
    <div>
      <div style={{ position: "relative", width: "100%", height: "600px" }}>
        <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
      </div>
      <h2 className="text-2xl mt-2 mb-1 font-medium text-black/90">{header}</h2>
      <p className="text-black/60 text-base">{title}</p>
      <p className="mt-4 text-black/60 text-sm mb-20">{description}</p>
    </div>
  );
}
