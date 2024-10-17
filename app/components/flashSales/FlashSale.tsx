'use client';

import React, { useEffect, useState } from 'react';
import styles from './flashSale.module.css'
import Image from "next/image";
import Rectangle from "../../../public/images/upperblockRectangle.png"
import LeftArrow from "../../../public/images/Fill With Left Arrow.png"
import RightArrow from "../../../public/images/Fill with Right Arrow.png"


const FlashSale = () => {
    const [timer, setTimer] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
        days: 3,
        hours: 23,
        minutes: 19,
        seconds: 56,
      });
    return (

    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.todays}>
                <div className={styles.upperblock}>
                    <div className={styles.containerForRectangleText}>
                        <div className={styles.upperblockRectangle}>
                            <Image className={styles.rectangle} src={Rectangle} alt="Rectangle"></Image>
                        </div>
                        <div className={styles.upperblockText}>
                            Today's
                        </div>
                    </div>
                    
                </div>
                <div className={styles.flashSalesTextTimerArrows}>
                <div className={styles.flashSalesText}>
                        Flash Sales
                </div>
                <div className={styles.timer}>
                <span className={styles.timerPart}>{timer.days} Days</span> : 
                <span className={styles.timerPart}>{timer.hours} Hours</span> : 
                 <span className={styles.timerPart}>{timer.minutes} Minutes</span> : 
                <span className={styles.timerPart}>{timer.seconds} Seconds</span>
                </div>

                <div className={styles.arrows}>
                <Image className={styles.arrowsIcons} src={LeftArrow} alt="left"></Image>
                <Image className={styles.arrowsIcons} src={RightArrow} alt="left"></Image>
                </div>
            </div>
            </div>
            <div className="goods">

            </div>
        </div>
    </div>
    );
  };
  
  export default FlashSale;
  