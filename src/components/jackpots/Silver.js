import React from "react";
import style from "./Silver.module.scss";
const Silver = () => {
  return (
    <div className={style.silver}>
      <div className={style.container}>
        <img
          className={style.bgImg}
          src={require("../../assets/images/bg-silver.png")}
          alt="diamondBg"
        />
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
