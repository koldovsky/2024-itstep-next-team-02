'use client';
import styles from "./Header.module.css";
import Image from "next/image";
import Vector from "../../../public/images/vector.png";
import Heart from "../../../public/images/heart.png";
import Cart from "../../../public/images/cart.png";
import Search from "@/public/images/search.png";
import AccountImageAcc from "@/public/images/account-image.png";
import PackgImageAcc from "@/public/images/packg-image-acc.png";
import CancelImageAcc from "@/public/images/cancel-image-acc.png";
import StarImageAcc from "@/public/images/star-image-acc.png";
import LogoutImageAcc from "@/public/images/log-out-image-acc.png";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import { Api } from "@/services/api-cient";
import React from "react";

function getCookie(name: string): number {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return Number(parts.pop()!.split(';')[0]); 
  }
  return -1;
}

function getCookieToken(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()!.split(';')[0]; 
  }
  return null; 
}

async function findUserById(id:number) {
  const response = await fetch(`/api/users/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const data = await response.json(); 
  return data
}

function reg(router: ReturnType<typeof useRouter>) {
  router.push('/register');
}

const userToken = getCookieToken('token');
async function userLoggined(router: ReturnType<typeof useRouter>) {
  const userId = getCookie('id');
  const user = await findUserById(userId)
  console.log("UUU",user)
  console.log("user.token", user.token)
  console.log("userToken", userToken)

  if (user?.token !== userToken) {
    reg(router); 

  }

  if (userId) {
    console.log(`User ID is: ${userId}`);
  } else {
    console.log('No user ID cookie found');
  }
} 



const Header = () => {

  const router = useRouter();
  const pathname = usePathname();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [products, setProducts] = React.useState<Product[]>([]);

  const validateUserToken = async () => {
    const userId = getCookie("id");
    const user = await findUserById(userId);
    const userToken = getCookieToken("token");

    if (user?.token === userToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    validateUserToken(); 
  }, [pathname]);



  const handleAccountClick = () => {
    if (!isLoggedIn) {
      reg(router);
    }
  };

  function logOut() {
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    useEffect(() => {
      validateUserToken();
    }, [pathname]);
  }

  React.useEffect(() => {
    const timeout = setTimeout(async () => {
      if (searchQuery.trim() !== "") {
        try {
          const response = await Api.products.search(searchQuery);
          setProducts(response);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      } else {
        setProducts([]);
      }
    }, 250);
  
    return () => clearTimeout(timeout);
  }, [searchQuery]);

  const onClickItem = () => {
    setSearchQuery("");
    setProducts([]);
  };

  return (
    <>
      <div className={styles.bar}>
        <div className={styles.text}>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link className={styles.shopNow} href="">
            Shop Now{" "}
          </Link>
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
            <Link href="/" className={styles.nuvButons}>
              Home
            </Link>
            <Link href="" className={styles.nuvButons}>
              About
            </Link>
            <Link href="" className={styles.nuvButons}>
              Contact
            </Link>
            <div className={styles.dropdownAccount}>
            <button className={styles.mainMenuAccButton} onClick={handleAccountClick}>Account</button>
              {isLoggedIn &&(
                <div className={styles.accDropdownChild}>
                  <div className={styles.containerForMenu}>
                    <Image src={AccountImageAcc} alt="Your Account" />
                    <Link href="">Manage my account</Link>
                  </div>
                  <div className={styles.containerForMenu}>
                    <Image src={PackgImageAcc} alt="Your order" />
                    <Link href="/dwdw">My order</Link>
                  </div>
                  <div className={styles.containerForMenu}>
                    <Image src={CancelImageAcc} alt="Your cancellations" />
                    <Link href="">My cancellations</Link>
                  </div>
                  <div className={styles.containerForMenu}>
                    <Image src={StarImageAcc} alt="Your reviews" />
                    <Link href="">My reviews</Link>
                  </div>
                  <div className={styles.containerForMenu}>
                    <Image src={LogoutImageAcc} alt="Log out" />
                    <Link href="" onClick={logOut}>Log out</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={styles.flex}>
            {products.length > 0 && (
              <div className="absolute w-[260px] bg-white rounded-xl py-2 top-120 shadow-md z-30 mt-40">
                {products.map((product) => (
                  <Link
                    onClick={onClickItem}
                    key={product.id}
                    className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
                    href={`/goods/${product.id}`}
                  >
                    <Image width={32} height={32} className="rounded-sm" src={product.imageUrl} alt={product.name} />
                    <span>{product.name}</span>
                  </Link>
                ))}
              </div>
            )}
         <div className={styles.inputContainer}>
              <input className={styles.inputSearhFooter} type="text" placeholder="What are you looking for? " value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              <button type="submit" className={styles.emailButton}>
                <Image className={`${styles.icons} ${styles.search}`} src={Search} alt="Search" />
              </button>
            </div>
            <Image className={styles.icons} src={Heart} alt="heart"></Image>
            <Link href="/cart">
              <Image className={styles.icons} src={Cart} alt="cart"></Image>
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;