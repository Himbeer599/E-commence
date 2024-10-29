import React, { useEffect, useState, useRef } from 'react';
import './BestSeller.css';

const Bestseller = () => {
    const [products, setProducts] = useState([]);
    const containerRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);

    // Fetch products from API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    // Handle horizontal scroll
    const scrollLeft = () => {
        containerRef.current.scrollBy({
            left: -200,
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        containerRef.current.scrollBy({
            left: 200,
            behavior: 'smooth',
        });
    };

    // Handle drag scroll
    const handleMouseDown = (e) => {
        setIsScrolling(true);
        containerRef.current.startX = e.pageX - containerRef.current.offsetLeft;
        containerRef.current.scrollLeftAtStart = containerRef.current.scrollLeft;
    };

    const handleMouseMove = (e) => {
        if (!isScrolling) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = x - containerRef.current.startX;
        containerRef.current.scrollLeft = containerRef.current.scrollLeftAtStart - walk;
    };

    const handleMouseUp = () => setIsScrolling(false);

    return (
        <div className="bestseller">
            <h2>Best Sellers</h2>
            <div className="bestseller-wrapper">
                <button className="scroll-btn scroll-left" onClick={scrollLeft}>&lt;</button>
                <div
                    className="bestseller-container"
                    ref={containerRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseUp}
                    onMouseUp={handleMouseUp}
                >
                    {products.length === 0 ? (
                        <div>Loading...</div>
                    ) : (
                        products.map((product) => (
                            <div className="bestseller-item" key={product.id}>
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p className="price">${product.price}</p>
                                <button className="buy-now">Buy Now</button>
                            </div>
                        ))
                    )}
                </div>
                <button className="scroll-btn scroll-right" onClick={scrollRight}>&gt;</button>
            </div>
        </div>
    );
};

export default Bestseller;
