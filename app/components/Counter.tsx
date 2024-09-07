export default function Counter() {
  return (
    <div className="relative bg-counter bg-cover bg-no-repeat">
      <div className="absolute top-0 bg-black/40 w-full h-full py-20">
        <div className="grid grid-cols-4">
          <div className="text-center text-white">
            <div className="flex justify-center">
              <img src="/images/c1.png" alt="c1" />
            </div>
            <h2 className="my-2 text-5xl font-bold">9859</h2>
            <p>Icon Collections</p>
          </div>
        </div>
      </div>
    </div>
  );
}
