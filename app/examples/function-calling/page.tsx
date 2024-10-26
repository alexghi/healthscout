"use client";

import React, { useState } from "react";
import styles from "../shared/page.module.css";
import Chat from "../../components/chat";
import { getWeather } from "../../utils/weather";
import { getDoctors } from "../../utils/doctors";
import { RequiredActionFunctionToolCall } from "openai/resources/beta/threads/runs/runs";

const FunctionCalling = () => {
  const [doctorsData, setDoctorsData] = useState([]);

  const functionCallHandler = async (call: RequiredActionFunctionToolCall) => {
    // if (call?.function?.name !== "get_weather") return;
    if(call.function.name  === "get_doctors") {
      const data = getDoctors();
      setDoctorsData(data);
      return JSON.stringify(data);
    }

    if (call.function.name === "get_weather") {
      const args = JSON.parse(call.function.arguments);
      const data = getWeather(args.location);
      return JSON.stringify(data);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.chatContainer}>
          <div className={styles.chat}>
            <Chat functionCallHandler={functionCallHandler} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FunctionCalling;
