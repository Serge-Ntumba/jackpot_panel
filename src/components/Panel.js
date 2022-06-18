import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  Fragment,
} from "react";
import Diamond from "./jackpots/Diamond";
import Gold from "./jackpots/Gold";
import Platinum from "./jackpots/Platinum";
import Silver from "./jackpots/Silver";
import Bronze from "./jackpots/Bronze";
import Iron from "./jackpots/Iron";
import style from "./Panel.module.scss";

import JackpotFullPanel from "./jackpots/JackpotFullPanel";
import Timer from "./animation/Timer";
import Parts from "./Parts";

const Panel = () => {
  const [accumulated, setAccumulated] = useState(true);
  const [counter, setCounter] = useState(5);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [panel, setPanel] = useState({
    panel: style.panel,
    panelAcc: style.panelAcc,
  });

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  const handleMousemove = (e) => {
    document.querySelectorAll(".parallax").forEach(function (move) {
      var moving_value = move.getAttribute("data-value");
      setX((e.clientX * moving_value) / 250);
      setY((e.clientY * moving_value) / 250);
    });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMousemove);
    return () => window.removeEventListener("mousemove", handleMousemove);
  }, []);

  return (
    <>
      {/* <Timer counter={counter} /> */}

      <div className={panel.panel}>
        {accumulated ? (
          counter === 0 ? (
            <>
              <Parts accumulated={accumulated} x={x} y={y} />
              <JackpotFullPanel accumulated={accumulated} />
            </>
          ) : (
            <Timer counter={counter} />
          )
        ) : (
          <>
            <Parts x={x} y={y} />
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
