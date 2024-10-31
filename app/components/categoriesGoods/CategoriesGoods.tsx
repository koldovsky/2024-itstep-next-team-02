import styles from "./CategoriesGoods.module.css";
import Phone from "../../../public/images/phoneLogoForCategories.png";
import Image from "next/image";
import PC from "../../../public/images/PCLogoForCategories.png";
import Camera from "../../../public/images/photoLogoForCategories.png";
import Watch from "../../../public/images/watchLogoForCategories.png";
import HeadPhones from "../../../public/images/headphonesLogoForCategories.png";
import Gaming from "../../../public/images/gamepadLogoForCategories.png";

const CategoriesGoods = () => {
  return (
    <div className={styles.container}>
      <div className={styles.good}>
        <div className={styles.frame}>
          <div className={styles.discount}>
            <Image className={styles.phone} src={Phone} alt="Phone" />
            Phones
          </div>
        </div>
      </div>
      <div className={styles.good}>
        <div className={styles.frame}>
          <div className={styles.discount}>
            <Image className={styles.phone} src={PC} alt="PC" />
            Computers
          </div>
        </div>
      </div>
      <div className={styles.good}>
        <div className={styles.frame}>
          <div className={styles.discount}>
            <Image className={styles.phone} src={Watch} alt="Phone" />
            Watches
          </div>
        </div>
      </div>
      <div className={styles.good}>
        <div className={styles.frame}>
          <div className={styles.discount}>
            <Image className={styles.phone} src={Camera} alt="Phone" />
            Cameras
          </div>
        </div>
      </div>
      <div className={styles.good}>
        <div className={styles.frame}>
          <div className={styles.discount}>
            <Image className={styles.phone} src={HeadPhones} alt="Phone" />
            HeadPhones
          </div>
        </div>
      </div>
      <div className={styles.good}>
        <div className={styles.frame}>
          <div className={styles.discount}>
            <Image className={styles.phone} src={Gaming} alt="Phone" />
            Gaming
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesGoods;
