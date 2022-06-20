import React from "react";
import { motion } from "framer-motion";
import style from "./Diamond.module.scss";

const Diamond = ({ accumulated }) => {
  const accumulateNum = "393 034 982.12";
  const widthNums = accumulated ? 53 : 43;
  const heightNums = accumulated ? 80 : 70;
  return (
    <div className={style.diamond}>
      <div className={style.container}>
        <div className={style.backgrounds}>
          {accumulated ? (
            <img
              className={style.bgImgAcc}
              src={require("../../assets/images/bg-diamond-2.png")}
              alt="diamondBg"
            />
          ) : (
            <img
              className={style.bgImg}
              src={require("../../assets/images/bg-diamond-2.png")}
              alt="diamondBg"
            />
          )}
          {accumulated ? (
            <motion.img
              className={style.lightAcc}
              //   src={require("../../assets/images/bg-diamond.png")}
              src={require("../../assets/images/light-diamond.png")}
              alt="light"
              initial={{ scale: 1.3 }}
              animate={{ scale: 1.6 }}
              transition={{
                repeatType: "reverse",
                duration: 2,
                repeat: Infinity,
              }}
            />
          ) : (
            <motion.img
              className={style.light}
              //   src={require("../../assets/images/bg-diamond.png")}
              src={require("../../assets/images/light-diamond.png")}
              alt="light"
              initial={{ scale: 1 }}
              animate={{ scale: 1.4 }}
              transition={{
                repeatType: "reverse",
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          )}
        </div>

        <div className={style.jackpot}>
          {accumulated ? (
            <motion.img
              className={style.jackpotNameAcc}
              src={require("../../assets/images/diamond-title.png")}
              alt="jackpotName"
              initial={{ scale: 1.05 }}
              animate={{ scale: [1.5, 1.1] }}
              transition={{
                repeatType: "reverse",
                duration: 0.8,
                repeat: 11,
              }}
            />
          ) : (
            <img
              className={style.jackpotName}
              src={require("../../assets/images/diamond-title.png")}
              alt="jackpotName"
            />
          )}

          <div className={style.jackpotScore}>
            {accumulated ? (
              <motion.img
                className={style.jackpotScoreImgAcc}
                src={require("../../assets/images/score-bg-diamond-big.png")}
                alt="jackpotScore"
                initial={{ scale: 1.05 }}
                animate={{ scale: [1.09, 1] }}
                transition={{
                  repeatType: "reverse",
                  duration: 0.4,
                  repeat: 20,
                }}
              />
            ) : (
              <img
                className={style.jackpotScoreImg}
                src={require("../../assets/images/score-bg-diamond-big.png")}
                alt="jackpotScore"
              />
            )}
            <div
              className={
                accumulated ? style.jackpotScoreNumAcc : style.jackpotScoreNum
              }
            >
              {/* images should be from the backend */}
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

export default Diamond;
