import React from "react";
import { motion } from "framer-motion";
import style from "./Bronze.module.scss";

const Bronze = () => {
  return (
    <div className={style.bronze}>
      <div className={style.container}>
        {/* <img
          className={style.bgImg}
          src={require("../../assets/images/bg-bronze.png")}
          alt="diamondBg"
        /> */}

        <div className={style.backgrounds}>
          <img
            className={style.bgImg}
            src={require("../../assets/images/bg-bronze.png")}
            alt="bronzeBg"
          />
          <motion.img
            className={style.light}
            //   src={require("../../assets/images/bg-diamond.png")}
            src={require("../../assets/images/light.png")}
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
          <img
            className={style.jackpotName}
            // src={require("../../assets/images/diamond-title.png")}
            src={require("../../assets/images/bronze-title.png")}
            alt="diamondImg"
          />
          <div className={style.jackpotScore}>
            <img
              className={style.jackpotScoreImg}
              //   src={require("../../assets/images/score-bg-diamond.png")}
              src={require("../../assets/images/score-bg-bronze.png")}
              alt="diamondImg"
            />
            <div className={style.jackpotScoreNum}>333 756 982.12</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bronze;
