'use client';

import React, { useEffect, useState } from 'react';
import styles from './flashSale.module.css'
import Image from "next/image";
import Rectangle from "../../../public/images/upperblockRectangle.png"


const FlashSale = () => {
    const [timer, setTimer] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
        days: 3,
        hours: 23,
        minutes: 19,
        seconds: 56,
      });
    return (
      <>
        <div className={styles.container}>
            <div className={styles.todays}>
                <div className={styles.upperblock}>
                    <div className={styles.upperblockRectangle}>
                        <Image className={styles.icons} src={Rectangle} alt="Rectangle"></Image>
                    </div>
                    <div className={styles.upperblockText}>
                        Today's
                    </div>
                    <div className={styles.flashSalesText}>
                        Flash Sales
                    </div>
                </div>
                <div className={styles.timer}>
                <span className={styles.timerPart}>{timer.days} Days</span> : 
                <span className={styles.timerPart}>{timer.hours} Hours</span> : 
                 <span className={styles.timerPart}>{timer.minutes} Minutes</span> : 
                <span className={styles.timerPart}>{timer.seconds} Seconds</span>
                </div>
            </div>
            <div className="goods">

            </div>
        </div>
      </>
    );
  };
  
  export default FlashSale;
  