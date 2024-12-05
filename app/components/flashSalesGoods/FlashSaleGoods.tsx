"use client";

import { useState, useEffect } from "react";
import CategoryMark from "../../atoms/categoryMark";
import FlashSaleCard from "./FlashSaleCard";
import Image from "next/image";
import newLeftArrow from "@/public/images/new-arrow-left.png";
import newRightArrow from "@/public/images/new-arrow-right.png";
import styles from "./FlashSaleGoods.module.css";
import { Skeleton } from "../../components/ui/skeleton";

export default function BestSellProducts() {
  const [goods, setGoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchGoods = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/goods");
        if (!response.ok) {
          throw new Error("Failed to fetch goods");
        }
        const data = await response.json();
        setGoods(data.goods);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGoods();
  }, []);

  useEffect(() => {
    const savedDeadline = localStorage.getItem("flashSaleDeadline");

    const deadline: any = savedDeadline
      ? new Date(savedDeadline)
      : new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);

    if (!savedDeadline) {
      localStorage.setItem("flashSaleDeadline", deadline.toISOString());
    }

    const updateTimer = () => {
      const now: any = new Date();
      const difference = deadline - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimer({ days, hours, minutes, seconds });
      } else {
        setTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        localStorage.removeItem("flashSaleDeadline"); 
      }
    };

    const interval = setInterval(updateTimer, 1000);
    updateTimer(); 

    return () => clearInterval(interval);
  }, []);

  const displayedGoods = goods.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < goods.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (loading) {
    return (
      <section className="p-4 flex flex-col justify-center items-center w-full gap-y-12 md:gap-y-20 lg:gap-y-32">
        <div className="flex flex-col w-[70%]">
          <CategoryMark categoryName="Todays" />
          <div className="flex justify-between items-center py-6">
            <span className="text-[28px] font-semibold">Flash Sales</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-y-4 justify-center w-full sm:gap-x-6">
            {Array.from({ length: itemsPerPage }).map((_, idx) => (
              <Skeleton key={idx} className="w-64 h-80 mb-4 rounded-[8px]" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (goods.length === 0) {
    return (
      <section className="p-4 flex flex-col justify-center items-center w-full">
        <div className="flex flex-col w-[70%] text-center">
          <CategoryMark categoryName="This Month" />
          <p className="text-lg font-semibold py-6">No products available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="p-4 flex flex-col justify-center items-center w-full gap-y-12 md:gap-y-20 lg:gap-y-32">
      <div className="flex flex-col w-[70%]">
        <CategoryMark categoryName="This Month" />
        <div className="flex justify-between items-center py-6">
          <span className="text-[28px] font-semibold">Best Selling Products</span>
          <div className={styles.timer}>
            <span className={styles.timerPart}>{timer.days} Days</span> :
            <span className={styles.timerPart}>{timer.hours} Hours</span> :
            <span className={styles.timerPart}>{timer.minutes} Minutes</span> :
            <span className={styles.timerPart}>{timer.seconds} Seconds</span>
          </div>
          <div className="flex">
            <Image
              className={styles.arrowsIcons}
              src={newLeftArrow}
              alt="Previous Page"
              onClick={handlePrev}
              aria-label="Previous Page"
            />
            <Image
              className={styles.arrowsIcons}
              src={newRightArrow}
              alt="Next Page"
              onClick={handleNext}
              aria-label="Next Page"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-y-4 justify-center w-full sm:gap-x-6">
          {displayedGoods.map((product, idx) => (
            <FlashSaleCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
