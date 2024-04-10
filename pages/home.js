import React, { useState } from "react";
import styles from "../styles/Home.module.css";
function home() {
  const [noClick, isClick] = useState(false);
  
  return (
    <div className={styles.home}>
      <div className={styles.homeInfo}>
        <h2>Intelligence plus character-that is the goal of true education</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button onClick={()=>{isClick(!noClick)}}>
          {noClick ? "Know Less" : "Know More"}
        </button>
      </div>
    </div>
  );
}

export default home;
