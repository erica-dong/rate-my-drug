import React, { useState } from 'react';
  export const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const drugs = ["Vicodin", "Oxycontin", "Adderall", "Xanax", "Cocaine", "Heroin", "Meth", "LSD", "Shrooms", "Weed"];
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setSearchInput(e.target.value);
    };
  
    if (searchInput.length > 0) {
      drugs.filter((drugs) => {
      return drugs.match(searchInput);
  });
  }

  return <div>
    <input
            type="text"
            placeholder="Search for a drug..."
            onChange={handleChange}
            value={searchInput}
            className="border-2 border-gray-300 rounded-lg p-6 w-full placeholder:text-lg"/>
  </div>
}