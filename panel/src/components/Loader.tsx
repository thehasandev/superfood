import { Spinner } from "@material-tailwind/react";
export default function Loader() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Spinner {...({} as any)} className="h-16 w-16 text-gray-900/50" />
    </div>
  );
}
