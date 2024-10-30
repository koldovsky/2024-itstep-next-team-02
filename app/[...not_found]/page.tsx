import styles from "./page.module.css";
import { useRouter } from 'next/router';
import Image from "next/image";
import Link from "next/link";
import MainImage from "../../public/images/mainImageForLogin.png";
import GoogleLogo from "../../public/images/GoogleLogo.png";
import { useState } from 'react';
import NextBreadcrumb from "../components/NextBreadcrumb/NextBreadcrumb";

const page404 = () => {



  return (
    <>
      <div className={styles.Container}>
        <div className={styles.routerHistoryContainer}>
          <NextBreadcrumb 
            homeElement={'Home'}
            separator={<span> / </span>}
            activeClasses='font-bold'
            containerClasses='flex' 
            listClasses='hover:underline mx-2'
            capitalizeLinks   
          /></div>

        <div className={styles.mainTextContainer}>
          <h1>404 Not Found</h1>
          <h2>Your visited page not found. You may go home page.</h2>
          <Link className={styles.homeButton} href = "/" passHref>Back to home page</Link>
        </div>


      </div>
    </>
  );
};

export default page404;
