import React from "react";
import style from "./Bronze.module.scss";

const Bronze = () => {
  return (
    <div className={style.bronze}>
      <div className={style.container}>
        <img
          className={style.bgImg}
          src={require("../../assets/images/bg-bronze.png")}
          alt="diamondBg"
        />
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
