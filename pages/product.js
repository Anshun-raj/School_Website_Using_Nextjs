import React from "react";
import styles from "../styles/Product.module.css";
import Image from "next/image";
import productImg1 from "../pages/Assets/team3.jpg";
import productImg2 from "../pages/Assets/team5.jpg";
import productImg3 from "../pages/Assets/team6.jpg";

function product() {
  return (
    <div className={styles.product}>
      <h2>Our Product</h2>
      <div className={styles.productInfo}>
        <div className={styles.productCard}>
          <Image src={productImg1} className={styles.productImg} />
          <h4>Name:-Himanshu pandey</h4>
          <h5>Software Engineer</h5>
          <h6>Salary:-5000000</h6>
        </div>
        <div className={styles.productCard}>
          <Image src={productImg2} className={styles.productImg} />
          <h4>Name:-Shivansh Singh</h4>
          <h5>Scientist</h5>
          <h6>Salary:-6000000</h6>
        </div>
        <div className={styles.productCard}>
          <Image src={productImg3} className={styles.productImg} />
          <h4>Name:-Ritika Mishra</h4>
          <h5>Doctor</h5>
          <h6>Salary:-4000000</h6>
        </div>
      </div>
    </div>
  );
}

export default product;
