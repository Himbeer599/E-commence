import React from 'react'
import './CheckboxFilter.css'

const CheckboxFilter = ({ title, options, onChange}) => {
  // const options = options;
  return (
    <div className='checkbox-container'>
      <h3>{title}</h3>
      <div className="options-grid">
        {options.map((option,index) => (
          <label key={index} className="filter-option">
            <input
              type="checkbox"
              // checked={selectionOptions.includes(option)}
              onChange={(e) => {
                // console.log(e.target.checked)
                onChange('checkbox',option.name, e.target.checked);
              }}
            />
            <p className="optionname"> {option.name}</p>
            
          </label>
        ))}
      </div>
    </div>


  )
}

export default CheckboxFilter
