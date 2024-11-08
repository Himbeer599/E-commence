import React from 'react';

const CheckboxFilter = ({ title, options, selectedOptions, onChange }) => {
    const handleCheckboxChange = (option) => {
        const updatedOptions = selectedOptions.includes(option)
            ? selectedOptions.filter((item) => item !== option)
            : [...selectedOptions, option];

        onChange(updatedOptions);
    };

    return (
        <div className="checkbox-filter">
            <h3>{title}</h3>
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
    );
};

export default CheckboxFilter;
