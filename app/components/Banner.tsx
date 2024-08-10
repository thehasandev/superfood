
import Container from "./Container";

export default function Banner() {
  return (
    <section>
      <>
        <div className="relative bg-banner h-screen w-full bg-no-repeat bg-center bg-cover">
          <div className="absolute top-0 bg-black/20 w-full h-full">
            <Container>
              <div className="flex items-center h-screen ">
                <div className="text-white">
                  <h1 className="text-7xl font-black">The Art of tree</h1>
                  <p
                    className={`text-xl font-medium my-5 font-openSans`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum facilis eum non, mollitia tempore laudantium?
                  </p>
                  <button className="bg-teal-500 px-6 py-2 text-white text-base uppercase font-medium">
                    View features
                  </button>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </>
    </section>
  );
}
