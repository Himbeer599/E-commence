import React, { useEffect, useState } from 'react';
import './Banner.css'
// import images from '../../Pictures';

const imageNames = [
    'electronics.jpg', // 需要和文件夹中的文件名一致
    'electronics2.jpg',
    'smart home.jpg',
    'Aktion.jpg',
    'coffee machine.jpg',
    'comics.jpg',
];

const images = imageNames.map(name => require(`../../Pictures/${name}`));

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // 每3秒切换一次

        return () => clearInterval(interval); // 清理定时器
    }, [images.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="banner-container">
            <div className="arrow left-arrow" onClick={goToPrevious}>&lt;</div>
            <div className="banner">
                <img
                    src={images[currentIndex]}
                    alt="Banner"
                    className="banner-image"
                />
            </div>
            <div className="arrow right-arrow" onClick={goToNext}>&gt;</div>
        </div>
    );
};

export default Banner;
