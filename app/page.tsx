"use client";

import React from "react";
import styles from "./page.module.css";
import hero from "./assets/hero.png";
import IconChat from "./assets/icons/IconChat";

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={`${styles.hero}`}>
        <img
          src={hero.src}
          alt="Health Image Background"
          className={styles["hero-image"]}
        />
        <div className={styles["hero-content"]}>
          <h1 className={styles["hero-title"]}>
            Your Health, Always Within Reach
          </h1>
          <p className={styles["hero-text"]}>
            Consult with doctors online, share your symptoms, and get guidance
            without leaving your home. Health Connect makes managing chronic
            conditions simple and stress-free.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-3 items-center">
            <button className={styles["hero-button"]}>
              <IconChat width={16} height={16} fill="#15112B" /> Speak to a
              Doctor Now
            </button>
            <button className={styles["hero-button-outline"]}>
              Learn More
            </button>
          </div>
        </div>
      </div>

      <section className={`${styles["step-section"]}`}>
        <h2 className={`${styles["step-section-title"]}`}>
          Our simple 3-step process
        </h2>
        <div className={styles["step-container"]}>
          <div className={styles["step-item"]}>
            <div className={styles["step-number"]}>1</div>
            <div className="space-y-[10px] w-5/6">
              <h3 className={styles["step-title"]}>Free online assessment</h3>
              <p className={styles["step-text"]}>
                Our quick assessment helps us understand your situation and
                connects you to the right specialist for expert advice.
              </p>
            </div>
          </div>
          <div className={styles["step-item"]}>
            <div className={styles["step-number"]}>2</div>
            <div className="space-y-[10px] w-5/6">
              <h3 className={styles["step-title"]}>Consult a Doctor Online</h3>
              <p className={styles["step-text"]}>
                Choose a convenient time for a thorough consultation, where the
                doctor will review your health details and provide expert
                recommendations.
              </p>
            </div>
          </div>
          <div className={styles["step-item"]}>
            <div className={styles["step-number"]}>3</div>
            <div className="space-y-[10px] w-5/6">
              <h3 className={styles["step-title"]}>Get Your Health Plan</h3>
              <p className={styles["step-text"]}>
                We’ll guide you through the next steps, ensuring you have
                everything you need to manage your health effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
