import React from 'react';
import { Slider, InputNumber, Spin } from 'antd';
import styles from './Range.module.css';

interface RangeProps {
  min: number;
  max: number;
  isLoading: boolean;
  onChange: (values: [number, number]) => void;
}

const Range: React.FC<RangeProps> = ({ min, max, isLoading, onChange }) => {
  const [value, setValue] = React.useState<[number, number]>([min, max]);

  React.useEffect(() => {
    setValue([min, max]);
  }, [min, max]);

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <Spin size="small" />
      </div>
    );
  }

  return (
    <div className={styles.rangeContainer}>
      <div className={styles.inputs}>
        <InputNumber
          min={min}
          max={value[1]}
          value={value[0]}
          onChange={(newValue) => {
            const newRange: [number, number] = [newValue || min, value[1]];
            setValue(newRange);
            onChange(newRange);
          }}
          formatter={(value) => `$${value}`}
        />
        <span className={styles.separator}>-</span>
        <InputNumber
          min={value[0]}
          max={max}
          value={value[1]}
          onChange={(newValue) => {
            const newRange: [number, number] = [value[0], newValue || max];
            setValue(newRange);
            onChange(newRange);
          }}
          formatter={(value) => `$${value}`}
        />
      </div>
      <Slider
        range
        min={min}
        max={max}
        value={value}
        onChange={(newValue: number[]) => {
          const rangeValue: [number, number] = [newValue[0], newValue[1]];
          setValue(rangeValue);
          onChange(rangeValue);
        }}
      />
    </div>
  );
};

export default Range; 