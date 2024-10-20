import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../styles/carousel.css';

const CarouselComponent = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="carousel-wrapper">
            <Carousel
                showArrows={true}
                infiniteLoop={false}
                showThumbs={false}
                showStatus={false}
                autoPlay={false}
                interval={3000}
                selectedItem={currentSlide}
                onChange={handleSlideChange}
            >
                {images.map((elem, index) => (
                    <img key={index} src={`/projects/${elem.image}`} alt={`Slide ${index + 1}`} loading="lazy"/>
                ))}
            </Carousel>
            <div className="picture-desc">
                <p>{images[currentSlide]?.imgDesc}</p>
            </div>
        </div>
    );
};

export default CarouselComponent;
