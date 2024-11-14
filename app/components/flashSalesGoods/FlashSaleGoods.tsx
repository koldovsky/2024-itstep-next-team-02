'use client'

import styles from "./FlashSaleGoods.module.css";
import AddToCartButton from "../addToCart/AddToCartButton";
import Image from "next/image";
import { useEffect, useState } from "react";

const FlashSaleGoods = () => {
  const [goods, setGoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);  

  const itemsPerPage = 4;

  useEffect(() => {
    const fetchGoods = async () => {
      try {
        const response = await fetch("/api/goods"); 
        if (!response.ok) {
          throw new Error("Failed to fetch goods");
        }
        const data = await response.json();
        setGoods(data.goods); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchGoods(); 
  }, []);

  const displayedGoods = goods.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < goods.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.container}>
      {displayedGoods.map((good, index) => (
        <div key={index} className={styles.good}>
          <div className={styles.frame}>
            <div className="w-[100%]">
              <div className={styles.discount}>-40%</div>
            </div>
            <Image src={good["imageUrl"]} alt={good["name"]} className={styles.goodImage} fill/>
            <AddToCartButton />
          </div>
          <div className={styles.description}>
            <div className={styles.goodName}>{good["name"]}</div>
            <div className={styles.goodPrice}>
              <div className={styles.newPrice}>${good["price"]}</div>
              {/* <div className={styles.oldPrice}>${good.oldPrice}</div> */}
            </div>
            <div className={styles.rating}>stars: {good["rating"]}</div>
          </div>
        </div>
      ))}

      <div className={styles.pagination}>
        <button
          className={styles.arrow}
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          &lt; Prev
        </button>
        <button
          className={styles.arrow}
          onClick={handleNext}
          disabled={(currentPage + 1) * itemsPerPage >= goods.length}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default FlashSaleGoods;
