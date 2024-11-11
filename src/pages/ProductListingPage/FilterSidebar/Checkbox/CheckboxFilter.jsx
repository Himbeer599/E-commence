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
    <div className='checkbox-container'>
      <h3>{title}</h3>
      <div className="options-grid">
        {options.map((option,index) => (
          <label key={index} className="filter-option">
            <input
              type="checkbox"
              // checked={selectionOptions.includes(option)}
              onChange={handleChange}
            />
            <p className="optionname"> {option.name}</p>
            
          </label>
        ))}
      </div>
    </div>


  )
}

export default CheckboxFilter
