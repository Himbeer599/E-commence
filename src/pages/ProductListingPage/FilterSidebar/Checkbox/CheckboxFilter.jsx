import React from 'react'
import './CheckboxFilter.css'

const CheckboxFilter = ({ title, options, onChange}) => {
  // const options = options;
  const handleChange = (event)=> {
    // const selectionOption = event.target.value;
    // const isChecked = event.target.checked;
    // const updatedSelection = isChecked
    //   ?[...selectionOptions,selectionOption]
    //   :selectionOptions.filter((option)=>option !== selectionOption)

    // onChange(updatedSelection);
  }

  return (
    <div>
      <h3>{title}</h3>
      {options.map((option,index) => (
        <label key={index}>
          <input
            type="checkbox"
            // checked={selectionOptions.includes(option)}
            onChange={handleChange}
          />
          {option.name}
        </label>
      ))}
    </div>


  )
}

export default CheckboxFilter
