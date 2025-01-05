import React from 'react';
import { Checkbox as AntCheckbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

interface CheckboxOption {
  id: string;
  label: string;
  count?: number;
}

interface FilterCheckboxProps {
  options: CheckboxOption[];
  selectedValues: string[];
  title: string;
  onChange: (value: string, checked: boolean) => void;
  className?: string;
}

const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  options,
  selectedValues,
  title,
  onChange,
  className = ''
}) => {
  const handleChange = (e: CheckboxChangeEvent, id: string) => {
    onChange(id, e.target.checked);
  };

  return (
    <div className={`filter-checkbox ${className}`}>
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      {options.map(option => (
        <div key={option.id} className="mb-2">
          <AntCheckbox
            checked={selectedValues.includes(option.id)}
            onChange={(e) => handleChange(e, option.id)}
          >
            {option.label} {option.count !== undefined && `(${option.count})`}
          </AntCheckbox>
        </div>
      ))}
    </div>
  );
};

export default FilterCheckbox; 