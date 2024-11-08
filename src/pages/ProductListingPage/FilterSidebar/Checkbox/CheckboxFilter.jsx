import React from 'react'
import './CheckboxFilter.css'

const CheckboxFilter = ({ title, options, selectionOptions, onChange }) => {
  const handleChange = (event)=> {
    const selectionOption = event.target.value;
    const isChecked = event.target.checked;
    const updatedSelection = isChecked
      ?[...selectionOptions,selectionOption]
      :selectionOptions.filter((option)=>option !== selectionOption)

    onChange(updatedSelection);
  }

  return (
    <div>
      <h3>{title}</h3>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={selectionOptions.includes(option)}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </div>


  )
}

export default CheckboxFilter
