"use client";

import React from "react";
import styles from "./page.module.css";
import medic from "../assets/medic.png";
import IconStar from "../assets/icons/IconStar";
import IconCalendar from "../assets/icons/IconCalendar";
import IconPinpoint from "../assets/icons/IconPinpoint";
import Link from "next/link";
const Complete = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.medicCard}>
            <h1 className={styles.title}>
              Congratulations! 🎉 Your booking is confirmed and live.
            </h1>
            <div className={styles.profile}>
              <img src={medic.src} alt="Doctor" className={styles.image} />
              <div className={styles.details}>
                <div>
                  <h2 className={styles.name}>Dr. Samuel Thompson</h2>
                  <p className={styles.description}>
                    Experienced in primary care and general health check-ups.
                  </p>
                  <p className={styles.specialty}>General Practitioner</p>
                  <div className={styles.rating}>
                    <IconStar />
                    <span className={styles.score}>4.8</span>
                  </div>
                </div>
                <div className="space-y-3 py-3 border-t border-b border-dashed text-[13px] leading-4">
                  <div className="flex items-center gap-3"><IconCalendar />21st October 2024 - 10:00 AM</div>
                  <div className="flex items-center gap-3"><IconPinpoint />Health Clinic Downtown – 123 Main Street, Suite 400, City, State</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.info}>
              <p className={styles.infoText}>
                You should have received an email with all the details about
                your appointment.
              </p>
              <p className={styles.appointmentDetails}>
                Your consultation with Dr. Samuel Thompson is set for October
                21st, 2024, at 10:00 AM. Please be sure to review the
                appointment details in the confirmation email and prepare any
                questions or concerns you may want to discuss.
              </p>
              <p className={styles.appointmentDetails}>
                You can also upload any additional medical documents or recent
                test results to your profile before the appointment to give Dr.
                Thompson a complete picture of your health.
              </p>
              <p className={styles.appointmentDetails}>
                For your convenience, you can add this event to your calendar to
                ensure you don’t miss the consultation.
              </p>
              <div className={styles.buttons}>
                <Link href={'/dashboard'} className={styles.dashboardButton}>
                  Return to Dashboard
                </Link>

                <button className={styles.calendarButton}>
                  Add Event to Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Complete;
