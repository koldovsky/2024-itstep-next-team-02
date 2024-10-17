import React from "react";
import Phone from "../../../public/images/phone.png";
import Image from "next/image";
import styles from './Slider.module.css'

const Slider = () => {
  return (
    <div>
      <Image className={styles.image} src={Phone} alt="phone"></Image>
    </div>
  );
};

export default Slider;
