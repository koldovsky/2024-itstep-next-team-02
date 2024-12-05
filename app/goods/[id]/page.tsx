"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Stars from "@/public/images/stars.png";
import BlueCircle from "@/public/images/blue-circle.png";
import RedCircle from "@/public/images/red-circle.png";
import Plus from "@/public/images/plus.png";
import Minus from "@/public/images/minus.png";
import Heart from "@/public/images/heart.png";
import Delivery from "@/public/images/delivery.png";
import Return from "@/public/images/return.png";
import { Skeleton } from "../../components/ui/skeleton";

interface GoodsPageProps {
  params: {
    id: string;
  };
}

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  rating: number;
  reviews: number;
  createdAt: string;
  categoryId: number;
  price: number;
  inStock: number;
  description: string;
  discountPercent: number;
}

const Good = ({ params }: GoodsPageProps) => {
  const { id } = params;

  const [product, setProduct] = useState<Product | null>(null);
  const [productQuantity, setProductQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const sizes = ["XS", "S", "M", "L", "XL"];

  useEffect(() => {
    const fetchGood = async () => {
      try {
        const response = await fetch(`/api/goods/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch goods");
        }
        const data: Product = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGood();
  }, [id]);

  if (!product) {
    return (
      <div className={styles.mainContainer}>
        <Skeleton className="w-24 h-6 mb-4 rounded-[8px]" />
        <div className={styles.goodContainer}>
          <div className={styles.goodsColumn}>
            <Skeleton className="w-28 h-40 mb-4 rounded-[8px]" />
            <Skeleton className="w-28 h-40 mb-4 rounded-[8px]" />
            <Skeleton className="w-28 h-40 mb-4 rounded-[8px]" />
            <Skeleton className="w-28 h-40 mb-4 rounded-[8px]" />
          </div>
          <Skeleton className="w-[50%] h-100 mb-4 rounded-[8px]" />
          <div className={styles.goodDescriptionContainer}>
            <Skeleton className="w-28 h-6 mb-4 rounded-[8px]" />
            <div className={styles.goodStats}>
              <Skeleton className="w-60 h-6 mb-4 rounded-[8px]" />
            </div>
            <Skeleton className="w-20 h-6 mb-4 rounded-[8px]" />
            <Skeleton className="w-90 h-20 mb-4 rounded-[8px]" />
            <hr />
            <div className={`${styles.goodConfig} ${styles.goodColor}`}>
              <h3>Colours: </h3>
              <Image className={styles.circles} src={BlueCircle} alt="color" />
              <Image className={styles.circles} src={RedCircle} alt="color" />
            </div>
            <div style={{ maxWidth: "250px" }} className={styles.goodConfig}>
              <h3>Size: </h3>
              <div className={styles.sizeBox}>XS</div>
              <div className={styles.sizeBox}>S</div>
              <div className={styles.sizeBox}>M</div>
              <div className={styles.sizeBox}>L</div>
              <div className={styles.sizeBox}>XL</div>
            </div>
            <div className={styles.goodConfig}>
              <div className={styles.goodQuantityContainer}>
                <button className={styles.removeButton}>
                  <Image className={styles.addAndRemoveIcons} src={Minus} alt="minus" />
                </button>
                <div className={styles.counter}>1</div>
                <button className={styles.addButton}>
                  <Image className={styles.addAndRemoveIcons} src={Plus} alt="plus" />
                </button>
              </div>
              <div className={styles.buyNowButton}>Buy Now</div>
              <div className={styles.heartContainer}>
                <Image className={styles.heartIcon} src={Heart} alt="heart" />
              </div>
            </div>
            <div className={styles.deliveryOptionContainer}>
              <div className={styles.deliveryBlock}>
                <Image className={styles.deliveryIcons} src={Delivery} alt="delivery" />
                <div>
                  <h2 className={styles.deliveryTitle}>Free Delivery</h2>
                  <p className={styles.deliveryDescription}>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div className={styles.deliveryBlock}>
                <Image className={styles.deliveryIcons} src={Return} alt="delivery" />
                <div>
                  <h2 className={styles.deliveryTitle}>Return Delivery</h2>
                  <p className={styles.deliveryDescription}>Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.goodName}>
        Account / Gaming / <strong>{product.name}</strong>
      </h2>
      <div className={styles.goodContainer}>
        <div className={styles.goodsColumn}>
          <Image className={styles.smallImages} src={product.imageUrl} alt={product.name} width={100} height={100} />
          <Image className={styles.smallImages} src={product.imageUrl} alt={product.name} width={100} height={100} />
          <Image className={styles.smallImages} src={product.imageUrl} alt={product.name} width={100} height={100} />
          <Image className={styles.smallImages} src={product.imageUrl} alt={product.name} width={100} height={100} />
        </div>
        <Image className={styles.mainImage} src={product.imageUrl} alt={product.name} width={300} height={300} />
        <div className={styles.goodDescriptionContainer}>
          <h2 className={styles.goodTitle}>{product.name}</h2>
          <div className={styles.goodStats}>
            <Image className={styles.stars} src={Stars} alt="stars" />
            <p>({product.reviews} Reviews)</p>
            <p>|</p>
            <p>Rating: {product.rating}</p>
          </div>
          <h2 className={styles.price}>$192.00</h2>
          <p>
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <hr />
          <div className={`${styles.goodConfig} ${styles.goodColor}`}>
            <h3>Colours: </h3>
            <Image className={styles.circles} src={BlueCircle} alt="color" />
            <Image className={styles.circles} src={RedCircle} alt="color" />
          </div>
          <div style={{ maxWidth: "250px" }} className={styles.goodConfig}>
            <h3>Size: </h3>
            {sizes.map((size) => (
              <div key={size} className={`${styles.sizeBox} ${selectedSize === size ? styles.selected : ""}`} onClick={() => setSelectedSize(size)}>
                {size}
              </div>
            ))}
          </div>
          <div className={styles.goodConfig}>
            <div className={styles.goodQuantityContainer}>
              <button className={styles.removeButton}>
                <Image
                  className={styles.addAndRemoveIcons}
                  src={Minus}
                  alt="minus"
                  onClick={() => setProductQuantity((prevQuantity) => prevQuantity - 1)}
                />
              </button>
              <div className={styles.counter}>{productQuantity}</div>
              <button className={styles.addButton}>
                <Image
                  className={styles.addAndRemoveIcons}
                  src={Plus}
                  alt="plus"
                  onClick={() => setProductQuantity((prevQuantity) => prevQuantity + 1)}
                />
              </button>
            </div>
            <div className={styles.buyNowButton}>Buy Now</div>
            <div className={styles.heartContainer}>
              <Image className={styles.heartIcon} src={Heart} alt="heart" />
            </div>
          </div>
          <div className={styles.deliveryOptionContainer}>
            <div className={styles.deliveryBlock}>
              <Image className={styles.deliveryIcons} src={Delivery} alt="delivery" />
              <div>
                <h2 className={styles.deliveryTitle}>Free Delivery</h2>
                <p className={styles.deliveryDescription}>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className={styles.deliveryBlock}>
              <Image className={styles.deliveryIcons} src={Return} alt="delivery" />
              <div>
                <h2 className={styles.deliveryTitle}>Return Delivery</h2>
                <p className={styles.deliveryDescription}>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Good;
