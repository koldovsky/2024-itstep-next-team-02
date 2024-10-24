import styles from './FlashSaleGoods.module.css'
import Image from "next/image";
import Gamepad from "../../../public/images/gamepad.png"
import Keyboard from "../../../public/images/keyboard.png"
import Monitor from "../../../public/images/monitor.png"
import Chair from "../../../public/images/chair.png"
import Link from 'next/link';


const FlashSaleGoods = () => {
    
    return (
        <div className={styles.container}>
            <div className={styles.good}>
                <div className={styles.frame}>
                    <div className={styles.goodImage}>
                        <div className={styles.discount}>
                            -40%
                        </div>
                    </div>
                    <button className={styles.addToCartButton}>Add To Cart</button>
                    
                </div>
                <div className={styles.description}>
                    <div className={styles.goodName}>
                        HAVIT HV-G92 Gamepad
                    </div>
                    <div className={styles.goodPrice}>
                        <div className={styles.newPrice}>
                            $120
                        </div>
                        <div className={styles.oldPrice}>
                            $160
                        </div>
                    </div>
                    <div className={styles.rating}>
                        stars:88
                    </div>
                </div>
            </div>
            <div className={styles.good}>
                <div className={styles.frame}>
                    <div className={styles.goodImage}>
                        <div className={styles.discount}>
                            -40%
                        </div>
                    </div>
                </div>
                <div className={styles.description}>
                    <div className={styles.goodName}>
                             AK-900 Wired Keyboard
                        </div>
                            <div className={styles.goodPrice}>
                                <div className={styles.newPrice}>
                                    $960
                                </div>
                                <div className={styles.oldPrice}>
                                    $160
                                </div>
                            </div>
                        <div className={styles.rating}>
                            stars:88
                        </div>
                </div>
            </div>
            <div className={styles.good}>
                <div className={styles.frame}>
                    <div className={styles.goodImage}>
                        <div className={styles.discount}>
                            -40%
                        </div>
                    </div>
                </div>
                <div className={styles.description}>
                    <div className={styles.goodName}>
                            IPS LCD Gaming Monitor
                        </div>
                            <div className={styles.goodPrice}>
                                <div className={styles.newPrice}>
                                    $370
                                </div>
                                <div className={styles.oldPrice}>
                                    $160 
                                </div>
                        </div>
                        <div className={styles.rating}>
                            stars:88
                        </div>
                </div>
            </div>
            <div className={styles.good}>
                <div className={styles.frame}>
                    <div className={styles.goodImage}>
                        <div className={styles.discount}>
                            -40%
                        </div>
                    </div>
                </div>
                <div className={styles.description}>
                    <div className={styles.goodName}>
                            S-Series Comfort Chair 
                        </div>
                            <div className={styles.goodPrice}>
                                <div className={styles.newPrice}>
                                    $120
                                </div>
                                <div className={styles.oldPrice}>
                                    $160
                                </div>
                        </div>
                        <div className={styles.rating}>
                            stars:88
                        </div>
                </div>
            </div>
            
        </div>
    );
  };
  
  export default FlashSaleGoods;
  