import React from "react";
import style from "./Platinum.module.scss";
import { motion } from "framer-motion";

const Platinum = () => {
  const widthNums = 53;
  const heightNums = 80;
  return (
    <div className={style.platinum}>
      <div className={style.container}>
        {/* <img
          className={style.bgImg}
          src={require("../../assets/images/bg-platinum.png")}
          alt="diamondBg"
        /> */}

        <div className={style.backgrounds}>
          <img
            className={style.bgImg}
            src={require("../../assets/images/bg-platinum.png")}
            alt="diamondBg"
          />
          <motion.img
            className={style.light}
            //   src={require("../../assets/images/bg-diamond.png")}
            src={require("../../assets/images/light.png")}
            alt="light"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1.3 }}
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
            src={require("../../assets/images/platinum-title.png")}
            alt="jackpotName"
          />
          <div className={style.jackpotScore}>
            <img
              className={style.jackpotScoreImg}
              //   src={require("../../assets/images/score-bg-diamond.png")}
              src={require("../../assets/images/score-bg-platinum.png")}
              alt="jackpotScore"
            />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platinum;
