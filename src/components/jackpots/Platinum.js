import React from "react";
import style from "./Platinum.module.scss";

const Platinum = () => {
  return (
    <div className={style.platinum}>
      <div className={style.container}>
        <img
          className={style.bgImg}
          //   src={require("../../assets/images/bg-diamond.png")}
          src={require("../../assets/images/bg-platinum.png")}
          alt="diamondBg"
        />
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
            <div className={style.jackpotScoreNum}>333 756 982.12</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platinum;
