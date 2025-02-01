"use client";
import React, { useState } from 'react';
import Select from 'react-select';
const optionsArray = [
  { value: "Cannabis", label: "Cannabis" },
  { value: "Cocaine", label: "Cocaine" },
  { value: "Ecstasy", label: "Ecstasy" },
  { value: "Heroin", label: "Heroin" },
  { value: "Ketamine", label: "Ketamine" },
  { value: "LSD", label: "LSD" },
  { value: "Methamphetamine", label: "Methamphetamine" },
  { value: "Mushrooms", label: "Mushrooms" },
  { value: "Prescription Drugs", label: "Prescription Drugs" },
  { value: "Steroids", label: "Steroids" },
  { value: "Tobacco", label: "Tobacco" },
  { value: "Other", label: "Other" }
];

const SearchDropdown = () => {
  const [selectedOption, setSelectedOption] = useState<{ value: string; label: string } | null>(null);

  const handleChange = (option: { value: string; label: string } | null) => {
    setSelectedOption(option);
    console.log(`Option selected:`, option);
  };
  

  return (
    <div>
      <Select className='"border-2 border-gray-300 rounded-lg p-6 w-full placeholder:text-lg"'
        value={selectedOption}
        placeholder="Search for a drug..."
        onChange={handleChange}
        styles={{ container: (provided) => ({ ...provided, width: 500 }) }}
        options={optionsArray}/>
    </div>
  );
};

export default SearchDropdown;