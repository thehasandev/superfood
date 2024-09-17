"use client";
import { useState } from "react";

export default function FilterForm() {
  const [change, setChange] = useState(1);

  const handleInputChange = (e: any) => {
    setChange(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Filter applied with price: ${change}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="range"
          id="vol"
          name="vol"
          min="0"
          max="50"
          value={change}
          onChange={handleInputChange}
          className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
      <label
        htmlFor="vol"
        className="my-2 items-center text-sm font-medium text-gray-700 flex justify-between"
      >
        Price: ${change} — $50
      <input
        type="submit"
        value="Filter"
        className="bg-primary text-white px-4 py-1 uppercase text-base cursor-pointer"
      />
      </label>
    </form>
  );
}
