import styles from "./Header.module.css";
import Image from "next/image";
import Vector from "../../../public/images/vector.png";
import Heart from '../../../public/images/heart.png'
import Cart from '../../../public/images/cart.png'
import Search from '../../../public/images/search.png'
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className={styles.bar}>
        <div className={styles.text}>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link className={styles.shopNow} href=''>Shop Now </Link>
        </div>
        <div></div>
        <div className={styles.languageSelector}>
          <div className={styles.language}>English</div>
          <Image className={styles.vector} src={Vector} alt="vector"></Image>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.navBarContainer}>
          <div className={styles.brandName}>Exclusive</div>
          <div className={styles.nuvButonsContainer}>
            <Link href = "">Home</Link>
            <Link href = "">About</Link>
            <Link href = "">Contact</Link>
            <Link href = "">Sign Up</Link>
          </div>
          <div className={styles.flex}>
            <div className={styles.inputContainer}>
              <input className={styles.inputSearhFooter} type="text" placeholder="What are you looking for?" />
              <button type="submit" className={styles.emailButton}>
              <Image className={`${styles.icons} ${styles.search}`} src={Search} alt="Search" />
              </button>
            </div>
            <Image className={styles.icons} src={Heart} alt="heart"></Image>
            <Image className={styles.icons} src={Cart} alt="cart"></Image>
          </div>
        </div>

      </div>
      <hr />
    </>
  );
};

export default Header;
