import React from "react";
import Diamond from "./jackpots/Diamond";
import Gold from "./jackpots/Gold";
import Platinum from "./jackpots/Platinum";
import Silver from "./jackpots/Silver";
import Bronze from "./jackpots/Bronze";
import Iron from "./jackpots/Iron";
import style from "./Panel.module.scss";

import JackpotFullPanel from "./jackpots/JackpotFullPanel";

const Panel = () => {
  return (
    <>
      <div className={style.panel}>
        <JackpotFullPanel />
        {/* <div className={style.panelTop}>
          <div className={style.panelTopGold}>
            <Gold />
          </div>
          <div className={style.panelTopPlatinum}>
            <Platinum />
          </div>
        </div>

        <div className={style.panelMiddle}>
          <Diamond />
        </div>

        <div className={style.panelBottom}>
          <div className={style.panelBottomSilver}>
            <Silver />
          </div>

          <div className={style.panelBottomIron}>
            <Iron />
          </div>
          <div className={style.panelBottomBronze}>
            <Bronze />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Panel;
