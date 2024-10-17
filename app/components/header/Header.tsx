import styles from "./Header.module.css";
import Image from "next/image";
import Vector from "../../../public/images/vector.png";
import Heart from '../../../public/images/heart.png'
import Cart from '../../../public/images/cart.png'
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className={styles.bar}>
        <div className={styles.text}>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link href=''>Shop Now </Link>
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
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
          <div>Sign Up</div>
          <div className={styles.flex}>
            <input type="text" placeholder="What are you looking for?" />
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
