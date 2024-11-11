import React from 'react'
import './Range.css'
const RangeFilter = ({onChange, filter }) => {
  return (
    <div className='pricerangefilter-container'>
      <h3>{filter.filtername}</h3>
      <input type="range" id="cowbell" name="cowbell" min="0" max="100" step="10" 
       onChange={(e) => {
        console.log(e.target.value)
        onChange('range',filter.filtername, e.target.value);
      }}
      />
    </div>
  )
}

export default RangeFilter