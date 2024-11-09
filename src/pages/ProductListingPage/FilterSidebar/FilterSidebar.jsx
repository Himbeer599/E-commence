import React from 'react'
import './FilterSidebar.css'
import CheckboxFilter from './Checkbox/CheckboxFilter'
// import RangeFilter from './Range/'

const FilterSidebar = ({filterdispatch, filterstate}) => 
{
  const filters = filterstate;
  console.log("filters:", filters);
  return (
    <div className='filter-sidebar-container'>
      <h2>Category</h2>
      {
      filters.map((filter) => (
      <CheckboxFilter 
          title = {filter.filtername}
          options={filter.options}
          onChange={(option)=>filterdispatch()}
      />
      ))
      }
    </div>
  )
}


export default FilterSidebar
