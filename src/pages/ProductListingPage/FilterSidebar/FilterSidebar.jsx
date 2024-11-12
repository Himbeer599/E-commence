import React from 'react'
import './FilterSidebar.css'
import CheckboxFilter from './Checkbox/CheckboxFilter'
import RangeFilter from './Range/Range'

const FilterSidebar = ({onChange, filterstate}) => 
{
  const filters = filterstate;
  console.log("filters:", filters);

  return (
    <div className='filter-sidebar-container'>
      <h2>Category</h2>
      {
      filters.map((filter,index) => (
        filter.type === 'range'?
        (
          <RangeFilter
          onChange={onChange}
          filter={filter}
          />
        ):(
          <CheckboxFilter 
                title = {filter.filtername}
                options={filter.options}
                onChange={onChange}
          />
        )
      ))
      }
    </div>
  )
}


export default FilterSidebar
