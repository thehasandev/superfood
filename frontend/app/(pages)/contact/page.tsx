
import Container from "../../components/Container";

export default function Contact() {
  return (
    <section className="py-20 px-4 lg:px-0">
      <Container>
      
        <h2 className="text-5xl font-bold text-black/70 my-10">
          Fill up a Form
        </h2>

        <div className="flex md:justify-between flex-wrap gap-6 ">
          <div className="w-4/6">
            <p className="mb-1">Name:</p>
            <input
              className="border border-black/50 w-full py-2 px-5 rounded-[4px]"
              placeholder="Your Name Here"
              type="text"
            />
          </div>
          <div className="w-4/6">
            <p className="mb-1">Email:</p>
            <input
              className="border border-black/50 w-full py-2 px-5 rounded-[4px]"
              placeholder="Your Email Here"
              type="text"
            />
          </div>
          <div className="w-4/6">
            <p className="mb-1">Message:</p>
            <input
              className="border border-black/50 w-full py-2 px-5 rounded-[4px]"
              placeholder="Your Message Here"
              type="text"
            />
          </div>
        </div>
        <button className="bg-teal-500 px-8 py-2 text-white text-base uppercase font-medium mt-8">
          Submit
        </button>

        <div className="mt-16">
          <iframe
            className="w-full h-[500px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7304.314497209434!2d90.41263218845212!3d23.74177128454077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1726392672010!5m2!1sen!2sbd"
            loading="lazy"
          ></iframe>
        </div>
      </Container>
    </section>
  );
}
