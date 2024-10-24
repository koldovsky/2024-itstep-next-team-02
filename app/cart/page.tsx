import React from "react";
import styles from "./page.module.css";
import Image from "next/image";






const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.swither}>
                <button>Home</button> / <button>Cart</button>
            </div>
        </div>
    );
  };

  export default Cart;
  