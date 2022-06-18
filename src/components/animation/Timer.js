// import React, { useEffect, useState } from "react";
import style from "./Timer.module.scss";
import { motion } from "framer-motion";

const Timer = ({ counter }) => {
  return (
    <div className={style.timer}>
      <video
        loop
        muted
        autoPlay
        id="video"
        className={style.TimerVideo}
        src={require("../../assets/images/timer.mp4")}
        type="video/mp4"
      >
        {" "}
        Your browser does not support video tag{" "}
      </video>
      <div className={style.TimerCounter}>
        <motion.img
          width="300"
          height="500"
          src={require(`../../assets/images/${counter}s.png`)}
          alt=""
          animate={{ scale: 1.5 }}
          transition={{ duration: 1, repeat: 5 }}
        />
      </div>

      {/* <motion.div
        className={style.timerCounter}
        animate={{ scale: 1.9 }}
        transition={{ duration: 1, repeat: 5 }}
      >
        {counter}
      </motion.div> */}
    </div>
  );
};

export default Timer;
