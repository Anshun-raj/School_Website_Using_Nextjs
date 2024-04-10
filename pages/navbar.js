import React from "react";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

function navbar() {
  return (
    <div className={styles.navbar}>
      <h2>
        Edu<span>Pro</span>
      </h2>
      <div className="nav">
        <Link
          href="/home"
          style={{
            padding: "0 30px",
            color: "#fff",
            fontSize: "24px",
            fontWeight: 600,
          }}
        >
          Home
        </Link>
        <Link
          href="/about"
          style={{
            padding: "0 30px",
            color: "#fff",
            fontSize: "24px",
            fontWeight: 600,
          }}
        >
          About
        </Link>
        <Link
          href="/product"
          style={{
            padding: "0 30px",
            color: "#fff",
            fontSize: "24px",
            fontWeight: 600,
          }}
        >
          Product
        </Link>
        <Link
          href="/review"
          style={{
            padding: "0 30px",
            color: "#fff",
            fontSize: "24px",
            fontWeight: 600,
          }}
        >
          Review
        </Link>
        <Link
          href="/contact"
          style={{
            padding: "0 30px",
            color: "#fff",
            fontSize: "24px",
            fontWeight: 600,
          }}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default navbar;
