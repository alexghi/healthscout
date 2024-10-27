"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { stepsConfig, Step } from "./stepsConfig";
import styles from "./navbar.module.css";
import Logo from "../assets/Logo";
import avatar from "../assets/avatar-placeholder.png";
import IconCheckmark from "../assets/icons/IconCheckmark";
import IconCompletedLine from "../assets/icons/IconCompletedLine";
import IconIncompleteLine from "../assets/icons/IconIncompleteLine";
import IconSquares from "../assets/icons/IconSquares";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const isProcessPage = stepsConfig.some(
    (step: Step) => step.path === pathname
  );

  const currentStepIndex = stepsConfig.findIndex(
    (step: Step) => step.path === pathname
  );

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Logo />
        </Link>
      </div>

      {isProcessPage && (
        <div className={styles.stepsContainer}>
          {stepsConfig.map((step: Step, index: number) => (
            <div key={step.label} className={styles.stepItem}>
              <div
                className={`${styles.stepBadge} ${
                  index < currentStepIndex
                    ? styles.stepBadgeCompleted
                    : index === currentStepIndex
                    ? styles.stepBadgeCurrent
                    : styles.stepBadgeIncomplete
                }`}
              >
                <span>
                  {index < currentStepIndex ? (
                    <span className={styles.iconCheckmark}>
                      <IconCheckmark />
                    </span>
                  ) : index === currentStepIndex ? (
                    <span className={styles.iconCurrentStep}>{index + 1}</span>
                  ) : (
                    <span className={styles.iconIncompleteStep}>
                      {index + 1}
                    </span>
                  )}
                </span>
                <span className="ml-2">{step.label}</span>
              </div>
              {index < stepsConfig.length - 1 &&
                (index < currentStepIndex ? (
                  <IconCompletedLine />
                ) : (
                  <IconIncompleteLine />
                ))}
            </div>
          ))}
        </div>
      )}

      <div className={styles.stepsContainer}>
        <button>
          <IconSquares />
        </button>
        <div className={styles.avatarContainer}>
          <img
            src={avatar.src}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
