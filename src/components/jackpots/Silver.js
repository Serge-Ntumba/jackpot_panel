import React from "react";
import { motion } from "framer-motion";
import style from "./Silver.module.scss";
const Silver = ({ accumulated }) => {
  // const widthNums = 51;
  // const heightNums = 75;

  const widthNums = accumulated ? 85 : 51;
  const heightNums = accumulated ? 105 : 75;
  return (
    <div className={style.silver}>
      <div className={style.container}>
        {accumulated ? (
          <div className={style.backgroundsAcc}>
            <img
              className={style.bgImg}
              src={require("../../assets/images/bg-silver.png")}
              alt="silverBg"
            />
            <motion.img
              className={style.light}
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
        ) : (
          <div className={style.backgrounds}>
            <img
              className={style.bgImg}
              src={require("../../assets/images/bg-silver.png")}
              alt="silverBg"
            />
            <motion.img
              className={style.light}
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
        )}

        <div className={style.jackpot}>
          {accumulated ? (
            <motion.img
              className={style.jackpotNameAcc}
              src={require("../../assets/images/silver-title.png")}
              alt=""
              initial={{ scale: 1.05 }}
              animate={{ scale: [1.5, 1.1] }}
              transition={{
                repeatType: "reverse",
                duration: 0.8,
                repeat: 10,
              }}
            />
          ) : (
            <img
              className={style.jackpotName}
              src={require("../../assets/images/silver-title.png")}
              alt=""
            />
          )}
          <div className={style.jackpotScore}>
            {accumulated ? (
              <motion.img
                className={style.jackpotScoreImgAcc}
                src={require("../../assets/images/score-bg-silver.png")}
                alt=""
                initial={{ scale: 1.01 }}
                animate={{ scale: [1.05, 1] }}
                transition={{
                  repeatType: "reverse",
                  duration: 0.4,
                  repeat: 20,
                }}
              />
            ) : (
              <img
                className={style.jackpotScoreImg}
                src={require("../../assets/images/score-bg-silver.png")}
                alt=""
              />
            )}
            <div
              className={
                accumulated ? style.jackpotScoreNumAcc : style.jackpotScoreNum
              }
            >
              <img
                src={require("../../assets/images/1s.png")}
                height={heightNums}
                width={widthNums}
                alt=""
              />
              <img
                src={require("../../assets/images/2s.png")}
                height={heightNums}
                width={widthNums}
                alt=""
              />
              <img
                src={require("../../assets/images/0s.png")}
                height={heightNums}
                width={widthNums}
                alt=""
              />
              &nbsp;
              <img
                src={require("../../assets/images/3s.png")}
                height={heightNums}
                width={widthNums}
                alt=""
              />
              <img
                src={require("../../assets/images/8s.png")}
                height={heightNums}
                width={widthNums}
                alt=""
              />
              <img
                src={require("../../assets/images/4s.png")}
                height={heightNums}
                width={widthNums}
                alt=""
              />
              &nbsp;
              <img
                src={require("../../assets/images/5s.png")}
                height={heightNums}
                width={widthNums}
                alt=""
              />
              <img
                src={require("../../assets/images/6s.png")}
                height={heightNums}
                width={widthNums}
                alt=""
              />
              <img
                src={require("../../assets/images/7s.png")}
                height={heightNums}
                width={widthNums}
                alt=""
              />
              &nbsp;
              <img
                src={require("../../assets/images/8s.png")}
                height={heightNums}
                width={widthNums}
                alt=""
              />
              <img
                src={require("../../assets/images/9s.png")}
                height={heightNums}
                width={widthNums}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Silver;
