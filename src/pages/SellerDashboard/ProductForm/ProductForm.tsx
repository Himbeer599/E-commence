import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Input, Button } from '../../../components/index';
import styles from './ProductForm.module.css';

interface ProductFormData {
  productName: string;
  description: string;
  price: string;
  stock: string;
  category: string;
  image: File | null;
}

interface ProductFormProps {
  onSubmit: (data: ProductFormData) => void;
}

interface InputField {
  label: string;
  value: string;
  setValue: (value: string) => void;
  type?: string;
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit }) => {
  const [productName, setProductName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [stock, setStock] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    file && setImage(file);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ productName, description, price, stock, category, image });
    // Reset form after submission
    setProductName('');
    setDescription('');
    setPrice('');
    setStock('');
    setCategory('');
    setImage(null);
  };

  const inputs: InputField[] = [
    { label: 'Product Name', value: productName, setValue: setProductName },
    { label: 'Description', value: description, setValue: setDescription },
    { label: 'Price ($)', value: price, setValue: setPrice, type: 'number' },
    { label: 'Stock Quantity', value: stock, setValue: setStock, type: 'number' },
    { label: 'Category', value: category, setValue: setCategory },
  ];

  return (
    <form onSubmit={handleSubmit} className={styles.productForm}>
      {inputs.map((input, index) => (
        <Input
          key={index}
          label={input.label}
          value={input.value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => input.setValue(e.target.value)}
          type={input.type}
          required
          className={styles.productFormInput}
        />
      ))}
      <div className='file-input'>
        <label htmlFor="product-image">Upload Product Image</label>
        <input
          type="file"
          id="product-image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <Button type="submit" className="submit-button">Add Product</Button>
    </form>
  );
};

export default ProductForm; 