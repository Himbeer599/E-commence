import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';

interface SearchBoxProps {
  onSearch: (value: string) => void;
  placeholder?: string;
  className?: string;
  debounceTime?: number;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  onSearch,
  placeholder = 'Search...',
  className = '',
  debounceTime = 300
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      onSearch(value);
    }, debounceTime),
    [onSearch, debounceTime]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
        🔍
      </span>
    </div>
  );
};

export default SearchBox; 