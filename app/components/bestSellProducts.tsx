"use client";

import { useState, useEffect } from "react";
import CategoryMark from "../atoms/categoryMark";
import RedButton from "../atoms/redButton";
import BestSellingTimer from "./bestSellingTimer";
import ProductCard from "./productCard";
import Image from "next/image";
import newLeftArrow from "@/public/images/new-arrow-left.png";
import newRightArrow from "@/public/images/new-arrow-right.png";
import styles from "./bestSellProducts.module.css";

export default function BestSellProducts() {
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
    <section className="p-4 flex flex-col justify-center items-center w-full gap-y-12 md:gap-y-20 lg:gap-y-32">
      <div className="flex flex-col w-[70%]">
        <CategoryMark categoryName="This Month" />
        <div className="flex justify-between items-center py-6">
          <span className="text-[28px] font-semibold">Best Selling Products</span>
          <RedButton text="View All" /> 
          <div className="flex ">
            <Image className={styles.arrowsIcons} src={newLeftArrow} alt="left" onClick={handlePrev} />
            <Image className={styles.arrowsIcons} src={newRightArrow} alt="right" onClick={handleNext} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-y-4 justify-center w-full sm:gap-x-6">
          {displayedGoods.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
      <div className="bg-jbl-bkg-mb sm:bg-jbl-bkg bg-cover bg-center w-[70%] h-fit">
        <div className="w-full h-full flex flex-col items-center gap-y-8 px-2 py-12 sm:items-start sm:px-12 md:px-20 lg:gap-y-12">
          <span className="text-[#00FF66] text-[20px] font-bold">Categories</span>
          <p className="text-[#fff] text-[33px] md:text-[42px] lg:text-[64px] font-semibold">
            Enhance Your <br />
            Music Experience
          </p>
          <BestSellingTimer />
          <button className="text-[#fff] font-bold w-fit text-lg bg-[#00FF66] px-12 py-4 rounded-[4px]">Buy Now!</button>
        </div>
      </div>
    </section>
  );
}
