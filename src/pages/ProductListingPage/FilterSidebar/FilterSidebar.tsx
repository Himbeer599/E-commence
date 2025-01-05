import React, { useEffect, useState } from 'react';
import { Checkbox, Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Range from './Range/Range';
import { productApi } from '../../../api/products';
import { RootState } from '../../../store';
import { setPriceRange } from '../../../store/filterSlice';
import './FilterSidebar.css';

const FilterSidebar: React.FC = () => {
  const dispatch = useDispatch();
  const priceRange = useSelector((state: RootState) => state.filter.priceRange);
  const [defaultRange, setDefaultRange] = useState({ min: 0, max: 1000 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPriceRange = async () => {
      try {
        setIsLoading(true);
        const range = await productApi.getPriceRange();
        setDefaultRange(range);
        dispatch(setPriceRange([range.min, range.max]));
      } catch (error) {
        console.error('Error fetching price range:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPriceRange();
  }, [dispatch]);

  return (
    <div className="filter-sidebar">
      <Divider>Price Range</Divider>
      <Range 
        min={defaultRange.min}
        max={defaultRange.max}
        isLoading={isLoading}
        onChange={(values) => {
          dispatch(setPriceRange(values));
        }}
      />
    </div>
  );
};

export default FilterSidebar; 