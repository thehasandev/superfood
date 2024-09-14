"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <div className="mt-20 mb-20 flex justify-center text-center my-6 px-3 xl:px-0">
        <div>
          <p className="capitalize text-red-600 font-black text-[150px] text-accent tracking-[10px]">
            Oops!
          </p>
          <h3 className="font-montserrat text-2xl mb-4">
            Something went wrong!
          </h3>

          <button
            onClick={() => reset()}
            className="border bg-transparent border-red-600 text-accent px-6 py-2.5 text-lg font-medium rounded-md hover:text-white hover:bg-red-600 duration-200"
          >
            Try again
          </button>
        </div>
      </div>
    </>
  );
}
