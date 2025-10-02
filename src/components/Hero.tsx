import React, { useState, useEffect } from 'react';

const Hero = ({ content }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // التمرير التلقائي للسلايدر
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => 
                prevSlide === content.sliderImages.length - 1 ? 0 : prevSlide + 1
            );
        }, 5000); // تغيير الصورة كل 5 ثواني
        
        return () => clearInterval(interval);
    }, [content.sliderImages.length]);
    
    return (
        <section id="hero" className="hero">
            {/* السلايدر */}
            <div className="hero-slider">
                {content.sliderImages.map((image, index) => (
                    <div 
                        key={index}
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${image.url}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: index === currentSlide ? 1 : 0,
                            transition: 'opacity 1s ease-in-out',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%'
                        }}
                    />
                ))}
            </div>
            
            {/* محتوى الـ Hero */}
            <div className="hero-content">
                <h1 className="hero-logo">
                    <img src="/images/logo.png" alt="Ashkanani Sport Marketing Logo" loading="lazy"/>
                </h1>
                <p className="hero-tagline">{content.tagline}</p>
            </div>
        </section>
    );
};

export default Hero;