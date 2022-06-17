// import React, { useEffect, useState } from "react";
import style from "./Timer.module.scss";
import { motion } from "framer-motion";

const Timer = ({ counter }) => {
  return (
    <div className={style.timer}>
      <motion.div
        className={style.timerCounter}
        animate={{ scale: 1.9 }}
        transition={{ duration: 1, repeat: 5 }}
      >
        {counter}
      </motion.div>
    </div>
  );
};

export default Timer;
