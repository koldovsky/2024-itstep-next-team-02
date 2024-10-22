import styles from './Categories.module.css'
import Image from "next/image";
import Rectangle from "../../../public/images/upperblockRectangle.png"
import LeftArrow from "../../../public/images/Fill With Left Arrow.png"
import RightArrow from "../../../public/images/Fill with Right Arrow.png"



const Categories = () => {
    
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
                            Categories
                        </div>
                    </div>
                    
                </div>
                <div className={styles.flashSalesTextTimerArrows}>
                <div className={styles.flashSalesText}>
                        Browse By Category
                </div>
            

                <div className={styles.arrows}>
                <Image className={styles.arrowsIcons} src={LeftArrow} alt="left"></Image>
                <Image className={styles.arrowsIcons} src={RightArrow} alt="left"></Image>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
  };
  
  export default Categories;