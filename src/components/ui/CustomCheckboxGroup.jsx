import { useState } from 'react';

export function CustomCheckboxGroup({ name, options, onChange }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
    onChange(name, option === selectedOption ? null : option);
  };

  return (
    <div className="flex flex-col gap-2">
      {options.map((option) => (
        <div key={option} className="flex items-center gap-2">
          <div className="relative">
            <input
              type="checkbox"
              id={`${name}-${option}`}
              checked={selectedOption === option}
              onChange={() => handleCheckboxChange(option)}
              className="absolute w-4 h-4 opacity-0 peer"
            />
            <div
              className={`w-4 h-4 border-2 border-green-500 rounded-full flex items-center justify-center transition duration-300 ${
                selectedOption === option
                  ? 'bg-gradient-to-r from-green-500 to-green-800'
                  : 'bg-white'
              } peer-checked:bg-gradient-to-r peer-checked:from-green-500 peer-checked:to-green-800`}
            >
              {selectedOption === option && (
                <span className="w-2 h-2 bg-white rounded-full"></span>
              )}
            </div>
          </div>
          <label
            htmlFor={`${name}-${option}`}
            className="text-lg font-gummy cursor-pointer select-none"
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  );
}

export default CustomCheckboxGroup;