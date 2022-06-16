import React from "react";
import ParticlesComponent from "../animation/ParticlesComponent";
import Diamond from "./Diamond";
import style from "./JackpotFullPanel.module.scss";
// import Bronze from "./Bronze";
// import Gold from "./Gold";
// import Iron from "./Iron";

// import Platinum from "./Platinum";
// import Silver from "./Silver";

const JackpotFullPanel = ({ accumulated }) => {
  return (
    <div className={style.container}>
      {/* <CoinAnimation /> */}

      <Diamond accumulated={accumulated} />
      {/* <Bronze /> */}
      {/* <Gold /> */}
      {/* <Platinum /> */}
      {/* <Silver /> */}
      {/* <Iron /> */}
      <div className={style.containerAnimation}>
        <ParticlesComponent />
      </div>
    </div>
  );
};

export default JackpotFullPanel;
