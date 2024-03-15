import React, { useState, useEffect, useRef } from 'react';

const Slider = () => {

    const delay = 2500;
    const [index, setIndex] = useState(0);
    const [images, setImages] = useState([]);
    const timeoutRef = useRef(null);
    const isPaused = useRef(false);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    const pause = () => {
        isPaused.current = true;
        resetTimeout();
    }

    const play = () => {
        isPaused.current = false;
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            next();
        }, delay);
    }

    const next = () => {
        setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    }

    const prev = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    }

    const fetchImages = () => {
        fetch(`https://fakestoreapi.com/products`).then((response) => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        }).then((data) => {
            setImages(data);
        }).catch((error) => {
            console.error(`Error: ${error.message}`);
        });
    }

    useEffect(() => {
        fetchImages();
    }, [])

    useEffect(() => {
        if (!isPaused.current) {
            resetTimeout();
            timeoutRef.current = setTimeout(() => {
                next();
            }, delay);
        }
        return () => {
            resetTimeout();
        };
    }, [index, images, isPaused]);

    return (
        <div className="slideshow" style={{ marginTop: '70px' }}>
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} >
                {images.map((item, index) => (
                    <div className="slide" onMouseEnter={pause} onMouseLeave={play} key={index} style={{ backgroundColor: 'var(--bgClr-2)' }} >
                        <div className="slideflex">
                            <div className="sftwo">
                                <img src={item.image} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex"><button onClick={prev}>Prev</button><button onClick={next}>Next</button></div>
            <div className="slideshowDots">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
