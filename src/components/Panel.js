import React, { useState, useEffect, useMemo, useCallback } from "react";

import Diamond from "./jackpots/Diamond";
import Gold from "./jackpots/Gold";
import Platinum from "./jackpots/Platinum";
import Silver from "./jackpots/Silver";
import Bronze from "./jackpots/Bronze";
import Iron from "./jackpots/Iron";
import style from "./Panel.module.scss";

import JackpotFullPanel from "./jackpots/JackpotFullPanel";
import Timer from "./animation/Timer";

const Panel = () => {
  const [accumulated, setAccumulated] = useState(false);
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <>
      {/* <Timer counter={counter} /> */}

      <div className={style.panel}>
        {accumulated ? (
          counter === 0 ? (
            <JackpotFullPanel accumulated={accumulated} />
          ) : (
            <Timer counter={counter} />
          )
        ) : (
          <>
            <div className={style.panelCherry}>
              <img src={require("./../assets/images/cherry.png")} alt="" />{" "}
            </div>
            <div className={style.panelCup}>
              {" "}
              <img src={require("./../assets/images/cup.png")} alt="" />{" "}
            </div>

            <div className={style.panelDi}>
              {" "}
              <img src={require("./../assets/images/di.png")} alt="" />{" "}
            </div>
            <div className={style.panelBul}>
              {" "}
              <img src={require("./../assets/images/bul.png")} alt="" />{" "}
            </div>
            <div className={style.panelCup2}>
              {" "}
              <img src={require("./../assets/images/cup-2.png")} alt="" />{" "}
            </div>
            <div className={style.panelDiamondPart}>
              {" "}
              <img
                src={require("./../assets/images/diamondPart.png")}
                alt=""
              />{" "}
            </div>
            <div className={style.panelDi2}>
              {" "}
              <img src={require("./../assets/images/di.png")} alt="" />{" "}
            </div>
            <div className={style.panelBel}>
              {" "}
              <img src={require("./../assets/images/bel.png")} alt="" />{" "}
            </div>
            <div className={style.panelRond4}>
              {" "}
              <img src={require("./../assets/images/rond4.png")} alt="" />{" "}
            </div>
            <div className={style.panelRond5}>
              {" "}
              <img src={require("./../assets/images/rond5.png")} alt="" />{" "}
            </div>
            <div className={style.panelRond3}>
              {" "}
              <img src={require("./../assets/images/rond3.png")} alt="" />{" "}
            </div>
            <div className={style.panelTriangle}>
              {" "}
              <img
                src={require("./../assets/images/triangle.png")}
                alt=""
              />{" "}
            </div>
            <div className={style.panelTriangle2}>
              {" "}
              <img
                src={require("./../assets/images/triangle.png")}
                alt=""
              />{" "}
            </div>
            <div className={style.panelFlower}>
              {" "}
              <img src={require("./../assets/images/flower.png")} alt="" />{" "}
            </div>
            <div className={style.panelBulChoco}>
              {" "}
              <img
                src={require("./../assets/images/bulChoco.png")}
                alt=""
              />{" "}
            </div>
            <div className={style.panelRond1}>
              {" "}
              <img src={require("./../assets/images/rond1.png")} alt="" />{" "}
            </div>
            <div className={style.panelRond11}>
              {" "}
              <img src={require("./../assets/images/rond1.png")} alt="" />{" "}
            </div>
            <div className={style.panelTop}>
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
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Panel;
