import React from 'react';
import styles from "./CarouselComponent.module.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import car1 from './../../../public/carousel/01.png'
import car2 from './../../../public/carousel/02.png'
import car3 from './../../../public/carousel/03.png'
import car4 from './../../../public/carousel/04.png'


const CarouselComponent = () => {
    const carouselData = [
        {
            imageUrl: car1,
        },
        {
            imageUrl: car2,
        },
        {
            imageUrl: car3,
        },
        {
            imageUrl: car4,
        },
    ];

    return (
        <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            interval={4000}
            renderArrowPrev={(clickHandler) => {
                return (
                    <div
                        className={styles.arrow}
                        onClick={clickHandler}
                    >
                        <FiChevronLeft />
                    </div>
                );
            }}
            renderArrowNext={(clickHandler) => {
                return (
                    <div
                        className={styles.arrowNext}
                        onClick={clickHandler}
                    >
                        <FiChevronRight />
                    </div>
                );
            }}
            renderIndicator={(clickHandler, isSelected, index, label) => {
                return (
                    <span
                        className={isSelected ? styles.active : styles.vert}
                        onClick={clickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        aria-label={`${label} ${index + 1}`}
                    >
                        &nbsp;&nbsp; {index}
                    </span>
                )
            }}
        >

            {
                carouselData.map((slide, index) => (
                    <div key={index} className={styles.carouselContainer}>
                        <div className={styles.leftCarousel}>
                            <div className={styles.leftCarouselTop}>
                                <div className={styles.divInvest}>
                                    LET'S MAKE THE BEST INVESTMENT
                                </div>
                                <div className={styles.divFriend}>
                                    There Is No Friend As <br />
                                    Loyal As A Book
                                </div>
                            </div>
                            <div className={styles.leftCarouselLorem}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad <br />
                                harum quibusdam, assumenda quia explicabo.
                            </div>
                            <div>
                                <button className={styles.carouBtn}>
                                    Shop Now
                                </button>
                            </div>
                        </div>
                        <div className={styles.rightCarousel}>
                            <div className={styles.divImgCarou}>
                                <Image src={slide.imageUrl} alt={`Slide ${index + 1}`} />
                                {index % 2 == 0 ?
                                    <div className={styles.texture}></div>
                                    : ""}
                            </div>
                        </div>
                    </div>
                ))
            }
        </Carousel>
    );
};

export default CarouselComponent;