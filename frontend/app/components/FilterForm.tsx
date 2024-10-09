"use client";
import { useState } from "react";

export default function FilterForm({ onChange }: any) {
  const [change, setChange] = useState(500);

  const handleInputChange = (e: any) => {
    setChange(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onChange(change);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="range"
          id="vol"
          name="vol"
          min="0"
          max="1000"
          value={change}
          onChange={handleInputChange}
          className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
      <label
        htmlFor="vol"
        className="my-2 items-center text-sm font-medium text-gray-700 flex gap-5 justify-between"
      >
        Price: ${change} — $1000
        <input
          type="submit"
          value="Filter"
          className="bg-primary text-white px-2 py-1 uppercase text-xs cursor-pointer"
        />
      </label>
    </form>
  );
}
