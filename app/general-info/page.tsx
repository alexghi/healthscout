"use client";

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const FunctionCalling = () => {
  return (
    <main className={styles.main}>
        <Link href="/medical-consultation" className={styles.next}>
          Next
        </Link>
    </main>
  );
};

export default FunctionCalling;
