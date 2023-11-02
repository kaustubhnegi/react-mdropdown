import React, { useState } from 'react';

const CheckboxDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="checkbox-dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        Click to Open Dropdown
      </div>
      {isOpen && (
        <div className="options">
          {options.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CheckboxDropdown;
