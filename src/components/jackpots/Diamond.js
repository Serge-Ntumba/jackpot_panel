import React from "react";
import { motion } from "framer-motion";
import style from "./Diamond.module.scss";

const Diamond = () => {
  return (
    <div className={style.diamond}>
      <div className={style.container}>
        {/* <motion.img
          className={style.bgImg}
          src={require("../../assets/images/bg-diamond.png")}
          alt="diamondBg"
          // initial={{ scale: 1 }}
          // animate={{ scale: 1.01 }}
          // transition={{
          //   repeatType: "reverse",
          //   duration: 2,
          //   repeat: Infinity,
          // }}
        /> */}
        <div className={style.backgrounds}>
          <img
            className={style.bgImg}
            src={require("../../assets/images/bg-diamond-2.png")}
            alt="diamondBg"
          />
          <motion.img
            className={style.light}
            //   src={require("../../assets/images/bg-diamond.png")}
            src={require("../../assets/images/light-diamond.png")}
            alt="light"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1.09 }}
            transition={{
              repeatType: "reverse",
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>

        <div className={style.jackpot}>
          <motion.img
            className={style.jackpotName}
            src={require("../../assets/images/diamond-title.png")}
            alt="jackpotName"
            initial={{ scale: 1 }}
            animate={{ scale: [1.2, 1.5, 1] }}
            transition={{
              repeatType: "reverse",
              duration: 1,
              repeat: 2,
            }}
          />
          <div className={style.jackpotScore}>
            <img
              className={style.jackpotScoreImg}
              src={require("../../assets/images/score-bg-diamond.png")}
              alt="jackpotScore"
            />
            <motion.div
              className={style.jackpotScoreNum}
              initial={{ opacity: 0.1 }}
              animate={{
                opacity: 1,
              }}
              transition={{
                repeatType: "reverse",
                duration: 2,
                repeat: 2,
                opacity: { duration: 1, repeat: 2 },
              }}
            >
              493 034 982.12
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diamond;
