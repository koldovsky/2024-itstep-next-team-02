// components/KeenSlider.tsx
"use client";
import React, { useState, useEffect } from "react"

import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import Link from "next/link";
import Phone from '../../../public/images/phone.png'
import appleLogo from '../../../public/images/appleLogo.png'
import shopNowButton from '../../../public/images/shopeNowButton.png'
import styles from './Categories.module.css'
import Image from "next/image";
import Rectangle from "../../../public/images/upperblockRectangle.png"
import LeftArrow from "../../../public/images/Fill With Left Arrow.png"
import RightArrow from "../../../public/images/Fill with Right Arrow.png"
import CategoriesGoods from "../categoriesGoods/CategoriesGoods"


    const AdaptiveHeight: KeenSliderPlugin = (slider) => {
        function updateHeight() {
          slider.container.style.height =
            slider.slides[slider.track.details.rel].offsetHeight + "px"
        }
        slider.on("created", updateHeight)
        slider.on("slideChanged", updateHeight)
      }
      
      export default function App() {
        const [currentSlide, setCurrentSlide] = React.useState(0)
        const [loaded, setLoaded] = useState(false)
        const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
          {
            initial: 0,
            slideChanged(s) {
              setCurrentSlide(s.track.details.rel)
            },
            created() {
              setLoaded(true)
            },
          },
          [AdaptiveHeight]
        )
      
        const [isVisible, setIsVisible] = useState(false);
        
      
        useEffect(() => {
          const timer = setTimeout(() => {
            setIsVisible(true);
          }, 1);
      
          return () => clearTimeout(timer);
        }, []);
      
      
        return (
          <>
                          <div className={styles.wrapper}>
                    <div className={styles.container}>
                        <div className={styles.todays}>
                            <div className={styles.upperblock}>
                                <div className={styles.containerForRectangleText}>
                                    <div className={styles.upperblockRectangle}>
                                        <Image className={styles.rectangle} src={Rectangle} alt="Rectangle"></Image>
                                    </div>
                                    <div className={styles.upperblockText}>
                                        Categories
                                    </div>
                                </div>
                            </div>
                            <div className={styles.flashSalesTextTimerArrows}>
                                <div className={styles.flashSalesText}>
                                    Browse By Category
                                </div>
            

                                <div className={styles.arrows}>
                                    <Image className={styles.arrowsIcons} src={LeftArrow} alt="sw"></Image>
                                    <Image className={styles.arrowsIcons} src={RightArrow} alt="left"></Image>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
          <div className={styles.containForSlider}>
            <div className={`${styles.navigationWrapper} ${isVisible ? styles.visible : styles.hidden}`}>
              <div ref={sliderRef} className={`${styles.keenSlider} keen-slider `}>
                <div className={`${styles.keenSlider__slide} ${styles.numberSlide1} keen-slider__slide number-slide1`}>
      

                <CategoriesGoods />
            </div>
      
            <div className={`${styles.keenSlider__slide} ${styles.numberSlide2} keen-slider__slide number-slide2`}>
                <CategoriesGoods />
            </div>

            <div className={`${styles.keenSlider__slide} ${styles.numberSlide3} keen-slider__slide number-slide3`}>
                <CategoriesGoods />
            </div>
            <div className={`${styles.keenSlider__slide} ${styles.numberSlide4} keen-slider__slide number-slide4`}>
                <CategoriesGoods />
            </div>
            <div className={`${styles.keenSlider__slide} ${styles.numberSlide5} keen-slider__slide number-slide5`}>
                <CategoriesGoods />
            </div>
            <div className={`${styles.keenSlider__slide} ${styles.numberSlide6} keen-slider__slide number-slide6`}>
                <CategoriesGoods />
            </div>
              </div>
              {loaded && instanceRef.current && (
                <>
                  <Arrow
                    left
                    onClick={(e: any) =>
                      e.stopPropagation() || instanceRef.current?.prev()
                    }
                    disabled={currentSlide === 0} 
                  />
      
                  <Arrow
                    onClick={(e: any) =>
                      e.stopPropagation() || instanceRef.current?.next()
                    }
                    disabled={
                      currentSlide ===
                      instanceRef.current.track.details.slides.length - 1
                    }
                  />
                </>
              )}
            </div>
          </div>
          
          </>
        )
      }
      
      interface ArrowProps {
        disabled: boolean;
        left?: boolean;
        onClick: (e: React.MouseEvent<SVGElement>) => void;
      }
      
      const Arrow: React.FC<ArrowProps> = ({ disabled, left, onClick }) => {
        return (
          <svg
            onClick={disabled ? undefined : onClick} 
            className={`${styles.arrow} ${left ? styles.arrowLeft : styles.arrowRight} ${disabled ? styles['arrow--disabled'] : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {left ? (
              <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            ) : (
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
          </svg>
        );
      };
    

        




















//         <div className={styles.wrapper}>
//         <div className={styles.container}>
//             <div className={styles.todays}>
//                 <div className={styles.upperblock}>
//                     <div className={styles.containerForRectangleText}>
//                         <div className={styles.upperblockRectangle}>
//                             <Image className={styles.rectangle} src={Rectangle} alt="Rectangle"></Image>
//                         </div>
//                         <div className={styles.upperblockText}>
//                             Categories
//                         </div>
//                     </div>
                    
//                 </div>
//                 <div className={styles.flashSalesTextTimerArrows}>
//                 <div className={styles.flashSalesText}>
//                         Browse By Category
//                 </div>
            

//                 <div className={styles.arrows}>
//                 <Image className={styles.arrowsIcons} src={LeftArrow} alt="left"></Image>
//                 <Image className={styles.arrowsIcons} src={RightArrow} alt="left"></Image>
//                 </div>
//             </div>
//             </div>
//         </div>
//     </div>





//     </div>
//     );
//   };
  
//   export default Categories;