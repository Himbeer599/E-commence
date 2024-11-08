import React from 'react'
import './FilterSidebar.css'
import CheckboxFilter from './Checkbox/CheckboxFilter'
// import RangeFilter from './Range/'

const FilterSidebar = ({filterdispatch, filterstate}) => {
  const {brand,color,productType,energyEfficiency,country,priceRange} = filterstate;
  const handleCheckboxChange = (filterName, option)=>{
    const selectionOptions = filterstate [filterName]
    const updatedOptions = selectionOptions.includes(option)
          ? selectionOptions.filter((item)=> item !== option)
          : [...selectionOptions, option];
          filterdispatch({
      type:'setFilter',
      filterName:filterName,
      payload:updatedOptions,
    })
  };
  
  return (
    <div className='filter-sidebar-container'>
      <h2>Category</h2>
      <CheckboxFilter 
          title = 'Product Type'
          options={['Entertainment Electronics','Kitchen Electronics','Cleaning and Home Care Electronics']}
          selectionOptions={productType}
          onChange={(option)=>handleCheckboxChange('product type',option)}
      />
{/*       
      <CheckboxFilter 
          title = 'Brand'
          options={['Simens','AEG','Miele','Bosch','Philips','WMF','IKEA','i-Phone']}
          selectionOptions={FilterSidebar.brand}
          onChange={(selectedOptions)=>handleCheckboxChange('brand',selectedOptions)}
      />
      <CheckboxFilter 
          title = 'Energy Efficiency'
          options={['A+++','A++','A+','A','B','C','D']}
          selectionOptions={FilterSidebar.energyefficiency}
          onChange={(selectedOptions)=>handleCheckboxChange('energy efficiency',selectedOptions)}
      />
      <CheckboxFilter 
          title = 'Color'
          options={['white','black','red','grey','blue','pink','purple','yellow']}
          selectionOptions={FilterSidebar.color}
          onChange={(selectedOptions)=>handleCheckboxChange('color',selectedOptions)}
      />
      <CheckboxFilter 
          title = 'Country of Manufacture'
          options={['China','Germany','USA','Canada','India','Japan','Korean']}
          selectionOptions={FilterSidebar.country}
          onChange={(selectedOptions)=>handleCheckboxChange('country',selectedOptions)}
      /> */}

      {/* <CheckboxFilter dispatch={dispatch} filters={filters}/> */}
      {/* <RangeFilter dispatch={dispatch} filters={filters}/> */}
    </div>
  )
}


export default FilterSidebar
