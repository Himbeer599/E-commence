import React from 'react'
import './Range.css'
const RangeFilter = () => {
  return (
    <div>
      
      <RangeFilter
          title='Price'
          min={0}
          max={10000}
          selectedRange={FilterSidebar.priceRange}
          onChange={(selectedRange)=>onFilterChange('priceRange', selectedRange)}
      />
    </div>
  )
}

export default RangeFilter
