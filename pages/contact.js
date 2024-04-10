import React from "react";
import styles from "../styles/Contact.module.css";
function contact() {
  return (
    <div className={styles.contact}>
      <h2>Contact Page</h2>
      <div className={styles.contactInfo}>
        <form>
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <input type="number" placeholder="Enter your age" />
          <input type="number" placeholder="Enter your number" min={10}/>
          <button className={styles.btn}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default contact;
