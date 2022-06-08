import React from "react";
import { motion } from "framer-motion";
import style from "./Silver.module.scss";
const Silver = () => {
  return (
    <div className={style.silver}>
      <div className={style.container}>
        {/* <img
          className={style.bgImg}
          src={require("../../assets/images/bg-silver.png")}
          alt="silverBg"
        /> */}

        <div className={style.backgrounds}>
          <img
            className={style.bgImg}
            src={require("../../assets/images/bg-silver.png")}
            alt="silverBg"
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
            src={require("../../assets/images/silver-title.png")}
            alt="diamondImg"
          />
          <div className={style.jackpotScore}>
            <img
              className={style.jackpotScoreImg}
              src={require("../../assets/images/score-bg-silver.png")}
              alt="diamondImg"
            />
            <div className={style.jackpotScoreNum}>333 756 982.12</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Silver;
