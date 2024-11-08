import React from 'react'
import './FilterSidebar.css'
import CheckboxFilter from './Checkbox/CheckboxFilter'
import RangeFilter from './Range/'

const FilterSidebar = ({dispatch, filters}) => {
  const [brand,color,productType,energyEfficiency,country,priceRange] = filters;
  const onFilterChange = (value)=>{}
  return (
    <div className='filter-sidebar-container'>
      <h2>Category</h2>
      <CheckboxFilter 
          title = 'Product Type'
          options={['Entertainment Electronics','Kitchen Electronics','Cleaning and Home Care Electronics']}
          selectionOptions={FilterSidebar.producttype}
          onChange={(selectedOptions)=>onFilterChange('product type',selectedOptions)}
      />
      <CheckboxFilter 
          title = 'Brand'
          options={['Simens','AEG','Miele','Bosch','Philips','WMF','IKEA','i-Phone']}
          selectionOptions={FilterSidebar.brand}
          onChange={(selectedOptions)=>onFilterChange('brand',selectedOptions)}
      />
      <CheckboxFilter 
          title = 'Energy Efficiency'
          options={['A+++','A++','A+','A','B','C','D']}
          selectionOptions={FilterSidebar.energyefficiency}
          onChange={(selectedOptions)=>onFilterChange('energy efficiency',selectedOptions)}
      />
      <CheckboxFilter 
          title = 'Color'
          options={['white','black','red','grey','blue','pink','purple','yellow']}
          selectionOptions={FilterSidebar.color}
          onChange={(selectedOptions)=>onFilterChange('color',selectedOptions)}
      />
      <CheckboxFilter 
          title = 'Country of Manufacture'
          options={['China','Germany','USA','Canada','India','Japan','Korean']}
          selectionOptions={FilterSidebar.country}
          onChange={(selectedOptions)=>onFilterChange('country',selectedOptions)}
      />
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


export default FilterSidebar
