import styles from "./FlashSaleGoods.module.css";
import AddToCartButton from "../addToCart/AddToCartButton";
import Gamepad from "@/public/images/goods/gamepad.png";
import Image from "next/image";

const FlashSaleGoods = () => {
  return (
    <div className={styles.container}>
      <div className={styles.good}>
        <div className={styles.frame}>
          <div className="w-[100%]">
            <div className={styles.discount}>-40%</div>
          </div>
          <Image src={Gamepad} alt="aodif" className={styles.goodImage} />

          <AddToCartButton />
        </div>
        <div className={styles.description}>
          <div className={styles.goodName}>HAVIT HV-G92 Gamepad</div>
          <div className={styles.goodPrice}>
            <div className={styles.newPrice}>$120</div>
            <div className={styles.oldPrice}>$160</div>
          </div>
          <div className={styles.rating}>stars:88</div>
        </div>
      </div>

      <div className={styles.good}>
        <div className={styles.frame}>
          <div className="w-[100%]">
            <div className={styles.discount}>-40%</div>
          </div>
          <Image src={Gamepad} alt="aodif" className={styles.goodImage} />
          <AddToCartButton />
        </div>
        <div className={styles.description}>
          <div className={styles.goodName}>AK-900 Wired Keyboard</div>
          <div className={styles.goodPrice}>
            <div className={styles.newPrice}>$960</div>
            <div className={styles.oldPrice}>$160</div>
          </div>
          <div className={styles.rating}>stars:88</div>
        </div>
      </div>

      <div className={styles.good}>
        <div className={styles.frame}>
          <div className="w-[100%]">
            <div className={styles.discount}>-40%</div>
          </div>
          <Image src={Gamepad} alt="aodif" className={styles.goodImage} />
          <AddToCartButton />
        </div>
        <div className={styles.description}>
          <div className={styles.goodName}>IPS LCD Gaming Monitor</div>
          <div className={styles.goodPrice}>
            <div className={styles.newPrice}>$370</div>
            <div className={styles.oldPrice}>$160</div>
          </div>
          <div className={styles.rating}>stars:88</div>
        </div>
      </div>

      <div className={styles.good}>
        <div className={styles.frame}>
          <div className="w-[100%]">
            <div className={styles.discount}>-40%</div>
          </div>
          <Image src={Gamepad} alt="aodif" className={styles.goodImage} />
          <AddToCartButton />
        </div>
        <div className={styles.description}>
          <div className={styles.goodName}>S-Series Comfort Chair</div>
          <div className={styles.goodPrice}>
            <div className={styles.newPrice}>$120</div>
            <div className={styles.oldPrice}>$160</div>
          </div>
          <div className={styles.rating}>stars:88</div>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleGoods;
