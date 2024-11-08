import React from 'react';

const RangeFilter = ({ title, min, max, selectedRange, onChange }) => {
    const handleRangeChange = (event) => {
        const { name, value } = event.target;
        const newRange = name === 'min' ? [Number(value), selectedRange[1]] : [selectedRange[0], Number(value)];
        onChange(newRange);
    };

    return (
        <div className="range-filter">
            <h3>{title}</h3>
            <div>
                <label>
                    Min: 
                    <input
                        type="number"
                        name="min"
                        value={selectedRange[0]}
                        min={min}
                        max={selectedRange[1]}
                        onChange={handleRangeChange}
                    />
                </label>
                <label>
                    Max: 
                    <input
                        type="number"
                        name="max"
                        value={selectedRange[1]}
                        min={selectedRange[0]}
                        max={max}
                        onChange={handleRangeChange}
                    />
                </label>
            </div>
        </div>
    );
};

export default RangeFilter;
