import React from "react";
import styles from "../styles/Review.module.css";
import Image from "next/image";
import reviewImg1 from "../pages/Assets/team3.jpg";
import reviewImg2 from "../pages/Assets/team5.jpg";
import reviewImg3 from "../pages/Assets/team6.jpg";
function review() {
  return (
    <div className={styles.review}>
      <h2>Reviewers</h2>
      <div className={styles.reviewInfo}>
        <div className={styles.reviewCard}>
          <Image src={reviewImg1} className={styles.reviewImg} />
          <h4>Name:-Rohit Rathor</h4>
          <div className={styles.rating}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <div className={styles.socialIcon}>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
        <div className={styles.reviewCard}>
          <Image src={reviewImg2} className={styles.reviewImg} />
          <h4>Name:-Rohit Rathor</h4>
          <div className={styles.rating}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <div className={styles.socialIcon}>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
        <div className={styles.reviewCard}>
          <Image src={reviewImg3} className={styles.reviewImg} />
          <h4>Name:-Rohit Rathor</h4>
          <div className={styles.rating}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <div className={styles.socialIcon}>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default review;
