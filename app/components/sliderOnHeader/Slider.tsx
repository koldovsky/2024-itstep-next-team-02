// components/KeenSlider.tsx
"use client";
import React, { useState, useEffect } from "react"
import styles from "./Slider.module.css";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image";
import Link from "next/link";
import Phone from '../../../public/images/phone.png'
import appleLogo from '../../../public/images/appleLogo.png'
import shopNowButton from '../../../public/images/shopeNowButton.png'

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
    if (!loaded || !instanceRef.current) return;
  
    const interval = setInterval(() => {
      if (instanceRef.current) {
        const currentSlideIndex = instanceRef.current.track.details.rel;
        const totalSlides = instanceRef.current.track.details.slides.length;
  
        if (currentSlideIndex === totalSlides - 1) {
          instanceRef.current.moveToIdx(0);
          setCurrentSlide(0);
        } else {
          instanceRef.current.next();
          setCurrentSlide(currentSlideIndex + 1);
        }
      }
    }, 4000); 
  
    return () => clearInterval(interval); 
  }, [loaded, instanceRef]);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
    <div className={styles.containForSlider}>
      <div className={`${styles.navigationWrapper} ${isVisible ? styles.visible : styles.hidden}`}>
        <div ref={sliderRef} className={`${styles.keenSlider} keen-slider `}>
          <div className={`${styles.keenSlider__slide} ${styles.numberSlide1} keen-slider__slide number-slide1`}>

            <div className={styles.contentInCaruseleContainer}>
              <div className={styles.contentInCaruseleContainerForTetx}>
                <div className={styles.contentInCaruseleContainerForTetxFlex}>
                  <div className={styles.LogoAndNameContainer}>
                    <div className={styles.appleLogo}> <Image src = {appleLogo} alt = "Apple Logo" /></div>
                    <div className={styles.phoneName}> iPhone 24 Pro Max</div>
                  </div>
                  <div className={styles.mainTextInCarusele}>Up to 10% off Voucher</div>
                  <div className={styles.shopNowButtonContainer}>
                    <Link href = "" className={styles.shopNow}>Shop Now</Link>
                    <Image className={styles.shopNowButton} src = {shopNowButton} alt = "Shop Now Button" />
                  </div>
                </div>
              </div>
              <div className={styles.contentInCaruseleContainerForPhoto}>
                <Image className={styles.icons} src={Phone} alt="cart"></Image>
              </div>
            </div>

          </div>

          <div className={`${styles.keenSlider__slide} ${styles.numberSlide2} keen-slider__slide number-slide2`}>
          <div className={styles.contentInCaruseleContainer}>
              <div className={styles.contentInCaruseleContainerForTetx}>
                <div className={styles.contentInCaruseleContainerForTetxFlex}>
                  <div className={styles.LogoAndNameContainer}>
                    <div className={styles.appleLogo}> <Image src = {appleLogo} alt = "Apple Logo" /></div>
                    <div className={styles.phoneName}> iPhone 24 Pro Max</div>
                  </div>
                  <div className={styles.mainTextInCarusele}>Up to 10% off Voucher</div>
                  <div className={styles.shopNowButtonContainer}>
                    <Link href = "" className={styles.shopNow}>Shop Now</Link>
                    <Image className={styles.shopNowButton} src = {shopNowButton} alt = "Shop Now Button" />
                  </div>
                </div>
              </div>
              <div className={styles.contentInCaruseleContainerForPhoto}>
                <Image className={styles.icons} src={Phone} alt="cart"></Image>
              </div>
            </div>
          </div>
          <div className={`${styles.keenSlider__slide} ${styles.numberSlide3} keen-slider__slide number-slide3`}>
          <div className={styles.contentInCaruseleContainer}>
              <div className={styles.contentInCaruseleContainerForTetx}>
                <div className={styles.contentInCaruseleContainerForTetxFlex}>
                  <div className={styles.LogoAndNameContainer}>
                    <div className={styles.appleLogo}> <Image src = {appleLogo} alt = "Apple Logo" /></div>
                    <div className={styles.phoneName}> iPhone 24 Pro Max</div>
                  </div>
                  <div className={styles.mainTextInCarusele}>Up to 10% off Voucher</div>
                  <div className={styles.shopNowButtonContainer}>
                    <Link href = "" className={styles.shopNow}>Shop Now</Link>
                    <Image className={styles.shopNowButton} src = {shopNowButton} alt = "Shop Now Button" />
                  </div>
                </div>
              </div>
              <div className={styles.contentInCaruseleContainerForPhoto}>
                <Image className={styles.icons} src={Phone} alt="cart"></Image>
              </div>
            </div>
          </div>
          <div className={`${styles.keenSlider__slide} ${styles.numberSlide4} keen-slider__slide number-slide4`}>
          <div className={styles.contentInCaruseleContainer}>
              <div className={styles.contentInCaruseleContainerForTetx}>
                <div className={styles.contentInCaruseleContainerForTetxFlex}>
                  <div className={styles.LogoAndNameContainer}>
                    <div className={styles.appleLogo}> <Image src = {appleLogo} alt = "Apple Logo" /></div>
                    <div className={styles.phoneName}> iPhone 24 Pro Max</div>
                  </div>
                  <div className={styles.mainTextInCarusele}>Up to 10% off Voucher</div>
                  <div className={styles.shopNowButtonContainer}>
                    <Link href = "" className={styles.shopNow}>Shop Now</Link>
                    <Image className={styles.shopNowButton} src = {shopNowButton} alt = "Shop Now Button" />
                  </div>
                </div>
              </div>
              <div className={styles.contentInCaruseleContainerForPhoto}>
                <Image className={styles.icons} src={Phone} alt="cart"></Image>
              </div>
            </div>
          </div>
          <div className={`${styles.keenSlider__slide} ${styles.numberSlide5} keen-slider__slide number-slide5`}>
          <div className={styles.contentInCaruseleContainer}>
              <div className={styles.contentInCaruseleContainerForTetx}>
                <div className={styles.contentInCaruseleContainerForTetxFlex}>
                  <div className={styles.LogoAndNameContainer}>
                    <div className={styles.appleLogo}> <Image src = {appleLogo} alt = "Apple Logo" /></div>
                    <div className={styles.phoneName}> iPhone 24 Pro Max</div>
                  </div>
                  <div className={styles.mainTextInCarusele}>Up to 10% off Voucher</div>
                  <div className={styles.shopNowButtonContainer}>
                    <Link href = "" className={styles.shopNow}>Shop Now</Link>
                    <Image className={styles.shopNowButton} src = {shopNowButton} alt = "Shop Now Button" />
                  </div>
                </div>
              </div>
              <div className={styles.contentInCaruseleContainerForPhoto}>
                <Image className={styles.icons} src={Phone} alt="cart"></Image>
              </div>
            </div>
          </div>
          <div className={`${styles.keenSlider__slide} ${styles.numberSlide6} keen-slider__slide number-slide6`}>
          <div className={styles.contentInCaruseleContainer}>
              <div className={styles.contentInCaruseleContainerForTetx}>
                <div className={styles.contentInCaruseleContainerForTetxFlex}>
                  <div className={styles.LogoAndNameContainer}>
                    <div className={styles.appleLogo}> <Image src = {appleLogo} alt = "Apple Logo" /></div>
                    <div className={styles.phoneName}> iPhone 24 Pro Max</div>
                  </div>
                  <div className={styles.mainTextInCarusele}>Up to 10% off Voucher</div>
                  <div className={styles.shopNowButtonContainer}>
                    <Link href = "" className={styles.shopNow}>Shop Now</Link>
                    <Image className={styles.shopNowButton} src = {shopNowButton} alt = "Shop Now Button" />
                  </div>
                </div>
              </div>
              <div className={styles.contentInCaruseleContainerForPhoto}>
                <Image className={styles.icons} src={Phone} alt="cart"></Image>
              </div>
            </div>
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
    {loaded && instanceRef.current && instanceRef.current.track.details.slides ? (
  <div className={styles.dots}>
    {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
      return (
        <button
          key={idx}
          onClick={() => {
            instanceRef.current?.moveToIdx(idx);
          }}
          className={`${styles.dot} ${currentSlide === idx ? styles.active : ''}`}
        ></button>
      );
    })}
  </div>
) : null}
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
