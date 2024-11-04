// src/components/ProductForm/ProductForm.jsx
import React, { useState } from 'react';
import {Input, Button} from '../../../components/index';
import styles from './ProductForm.module.css';

const ProductForm = ({ onSubmit }) => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        // if(file){
        //     setImage(file);
        // }
        {file && setImage(file)}
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ productName, description, price, stock, category,image });
        // Reset form after submission
        setProductName('');
        setDescription('');
        setPrice('');
        setStock('');
        setCategory('');
        setImage(null);
    };

    const inputs = [
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
                    onChange={(e) => input.setValue(e.target.value)}
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
