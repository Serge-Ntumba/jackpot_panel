import React from "react";
import CoinAnimation from "../animation/CoinAnimation";
import Bronze from "./Bronze";
import Diamond from "./Diamond";
import Gold from "./Gold";
import Iron from "./Iron";
import style from "./JackpotFullPanel.module.scss";
import Platinum from "./Platinum";
import Silver from "./Silver";

const JackpotFullPanel = () => {
  return (
    <div className={style.container}>
      {/* <CoinAnimation /> */}
      <Diamond />
      {/* <Bronze /> */}
      {/* <Gold /> */}
      {/* <Platinum /> */}
      {/* <Silver /> */}
      {/* <Iron /> */}
      <div className={style.containerAnimation}>
        <CoinAnimation />
      </div>
    </div>
  );
};

export default JackpotFullPanel;
