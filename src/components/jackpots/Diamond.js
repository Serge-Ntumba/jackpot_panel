import React from "react";
import { motion } from "framer-motion";
import style from "./Diamond.module.scss";

const Diamond = ({ accumulated }) => {
  const accumulateNum = "393 034 982.12";
  const widthNums = 43;
  const heightNums = 70;
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
                repeat: 5,
              }}
            />
          ) : (
            <img
              className={style.jackpotName}
              src={require("../../assets/images/diamond-title.png")}
              // src={require("../../assets/images/diamond-title-big.png")}
              alt="jackpotName"
            />
          )}

          <div className={style.jackpotScore}>
            {accumulated ? (
              <img
                className={style.jackpotScoreImgAcc}
                src={require("../../assets/images/score-bg-diamond.png")}
                alt="jackpotScore"
              />
            ) : (
              <img
                className={style.jackpotScoreImg}
                // src={require("../../assets/images/score-bg-diamond.png")}
                src={require("../../assets/images/score-bg-diamond-big.png")}
                alt="jackpotScore"
              />
            )}
            {accumulated ? (
              <motion.div
                className={style.jackpotScoreNumAcc}
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
                {accumulateNum}
              </motion.div>
            ) : (
              <div className={style.jackpotScoreNum}>
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
                  src={require("../../assets/images/0.png")}
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
                  src={require("../../assets/images/9.png")}
                  height={heightNums}
                  width={widthNums}
                  alt=""
                />
                {/* <img
                  src={require("../../assets/images/0-s.png")}
                  height={heightNums}
                  width={widthNums}
                  alt=""
                />
                <img
                  src={require("../../assets/images/1s-s.png")}
                  height={heightNums}
                  width={widthNums}
                  alt=""
                />
                <img
                  src={require("../../assets/images/2s-s.png")}
                  height={heightNums}
                  width={widthNums}
                  alt=""
                />
                <img
                  src={require("../../assets/images/3s-s.png")}
                  height={heightNums}
                  width={widthNums}
                  alt=""
                />
                <img
                  src={require("../../assets/images/4s-s.png")}
                  height={heightNums}
                  width={widthNums}
                  alt=""
                />
                <img
                  src={require("../../assets/images/5s-s.png")}
                  height={heightNums}
                  width={widthNums}
                  alt=""
                />
                <img
                  src={require("../../assets/images/6s-s.png")}
                  height={heightNums}
                  width={widthNums}
                  alt=""
                />
                <img
                  src={require("../../assets/images/7s-s.png")}
                  height={heightNums}
                  width={widthNums}
                  alt=""
                />
                <img
                  src={require("../../assets/images/8s-s.png")}
                  height={heightNums}
                  width={widthNums}
                  alt=""
                />
                <img
                  src={require("../../assets/images/9s-s.png")}
                  height={heightNums}
                  width={widthNums}
                  alt=""
                /> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diamond;
