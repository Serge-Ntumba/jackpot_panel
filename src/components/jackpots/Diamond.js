import React from "react";
import style from "./Diamond.module.scss";

const Diamond = () => {
  return (
    <div className={style.diamond}>
      <div className={style.container}>
        <img
          className={style.bgImg}
          src={require("../../assets/images/bg-diamond.png")}
          alt="diamondBg"
        />
        <div className={style.jackpot}>
          <img
            className={style.jackpotName}
            src={require("../../assets/images/diamond-title.png")}
            alt="jackpotName"
          />
          <div className={style.jackpotScore}>
            <img
              className={style.jackpotScoreImg}
              src={require("../../assets/images/score-bg-diamond.png")}
              alt="jackpotScore"
            />
            <div className={style.jackpotScoreNum}>493 034 982.12</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diamond;
