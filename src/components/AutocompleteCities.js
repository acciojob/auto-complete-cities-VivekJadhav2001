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

  const handleSelect = (city) => {
    setInputValue(city);
    setFiltered([]);
  };

  return (
    <div>
      <p>Search cities of India</p>

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type a city..."
      />

      {filtered.length > 0 && (
        <ul>
          {filtered.map((city, index) => (
            <li key={index} onClick={() => handleSelect(city)}>
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AutocompleteCities;
