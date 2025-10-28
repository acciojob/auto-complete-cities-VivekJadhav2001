import React, { useState } from "react";

function AutocompleteCities({ suggestions }) {
  const [inputValue, setInputValue] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim() === "") {
      setFiltered([]);
      return;
    }

    const matches = suggestions.filter((city) =>
      city.toLowerCase().startsWith(value.toLowerCase())
    );
    setFiltered(matches);
  };

  const handleSelect = (e) => {
    setInputValue(e.target.value);
    setFiltered([]);
  };

  return (
    <div className="h-screen w-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-4">
      <p>Search cities of India</p>

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type a city..."
        className="border-white border-2 bg-white text-black p-2 w-[12vw]"
      />

      {filtered.length > 0 && (
        <select
          onChange={handleSelect}
          size={filtered.length}
          className="text-black bg-white border-2 border-white p-2 w-[12vw]"
        >
          {filtered.map((city, i) => (
            <option key={i} value={city}>
              {city}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default AutocompleteCities;
