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
  console.log(x);
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

  // const parts = (
  // <Fragment>
  //   <div className={style.panelCherry}>
  //     <img
  //       width="120"
  //       height="117"
  //       className="parallax"
  //       style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
  //       data-value="-2"
  //       src={require("./../assets/images/cherry.png")}
  //       alt=""
  //     />{" "}
  //   </div>
  //   <div className={style.panelCup}>
  //     {" "}
  //     <img
  //       width="120"
  //       height="132"
  //       className="parallax"
  //       style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
  //       data-value="6"
  //       src={require("./../assets/images/cup.png")}
  //       alt=""
  //     />{" "}
  //   </div>

  //   <div className={style.panelDi}>
  //     {" "}
  //     <img
  //       width="70"
  //       height="70"
  //       className="parallax"
  //       style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
  //       data-value="-9"
  //       src={require("./../assets/images/di.png")}
  //       alt=""
  //     />{" "}
  //   </div>
  //   <div className={style.panelBul}>
  //     {" "}
  //     <img
  //       width="50"
  //       height="130"
  //       className="parallax"
  //       style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
  //       data-value="-5"
  //       src={require("./../assets/images/bul.png")}
  //       alt=""
  //     />{" "}
  //   </div>
  //   <div className={style.panelCup2}>
  //     {" "}
  //     <img
  //       width="120"
  //       height="132"
  //       data-value="3"
  //       className="parallax"
  //       style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
  //       src={require("./../assets/images/cup-2.png")}
  //       alt=""
  //     />{" "}
  //   </div>
  //   <div className={style.panelDiamondPart}>
  //     {" "}
  //     <img
  //       width="67"
  //       height="85"
  //       className="parallax"
  //       style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
  //       data-value="-7"
  //       src={require("./../assets/images/diamondPart.png")}
  //       alt=""
  //     />{" "}
  //   </div>
  //   <div className={style.panelDi2}>
  //     {" "}
  //     <img
  //       width="70"
  //       height="70"
  //       className="parallax"
  //       style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
  //       data-value="2"
  //       src={require("./../assets/images/di.png")}
  //       alt=""
  //     />{" "}
  //   </div>
  //   <div className={style.panelBel}>
  //     {" "}
  //     <img
  //       width="70"
  //       height="70"
  //       className="parallax"
  //       style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
  //       data-value="-9"
  //       src={require("./../assets/images/bel.png")}
  //       alt=""
  //     />{" "}
  //   </div>
  //   <div className={style.panelRond4}>
  //     {" "}
  //     <img
  //       width="130"
  //       height="100"
  //       className="parallax"
  //       style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
  //       data-value="5"
  //       src={require("./../assets/images/rond4.png")}
  //       alt=""
  //     />{" "}
  //   </div>
  //   <div className={style.panelRond5}>
  //     {" "}
  //     <img
  //       width="100"
  //       height="60"
  //       className="parallax"
  //       style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
  //       data-value="-8"
  //       src={require("./../assets/images/rond5.png")}
  //       alt=""
  //     />{" "}
  //   </div>
  //   <div className={style.panelRond3}>
  //     {" "}
  //     <img
  //       width="130"
  //       height="100"
  //       className="parallax"
  //       style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
  //       data-value="3"
  //       src={require("./../assets/images/rond3.png")}
  //       alt=""
  //     />{" "}
  //   </div>
  //   <div className={style.panelTriangle}>
  //     {" "}
  //     <img
  //       width="45"
  //       height="45"
  //       className="parallax"
  //       style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
  //       data-value="-4"
  //       src={require("./../assets/images/triangle.png")}
  //       alt=""
  //     />{" "}
  //   </div>
  //   <div className={style.panelTriangle2}>
  //     {" "}
  //     <img
  //       width="45"
  //       height="45"
  //       className="parallax"
  //       style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
  //       data-value="9"
  //       src={require("./../assets/images/triangle.png")}
  //       alt=""
  //     />{" "}
  //   </div>
  //   <div className={style.panelFlower}>
  //     {" "}
  //     <img
  //       className="parallax"
  //       style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
  //       data-value="-6"
  //       src={require("./../assets/images/flower.png")}
  //       alt=""
  //     />{" "}
  //   </div>
  //   <div className={style.panelBulChoco}>
  //     {" "}
  //     <img
  //       width="60"
  //       height="84"
  //       className="parallax"
  //       style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
  //       data-value="2"
  //       src={require("./../assets/images/bulChoco.png")}
  //       alt=""
  //     />{" "}
  //   </div>
  //   <div className={style.panelRond1}>
  //     {" "}
  //     <img
  //       width="100"
  //       height="60"
  //       data-value="-4"
  //       className="parallax"
  //       style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
  //       src={require("./../assets/images/rond1.png")}
  //       alt=""
  //     />{" "}
  //   </div>
  //   <div className={style.panelRond11}>
  //     {" "}
  //     <img
  //       width="100"
  //       height="60"
  //       data-value="7"
  //       className="parallax"
  //       style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
  //       src={require("./../assets/images/rond1.png")}
  //       alt=""
  //     />{" "}
  //   </div>
  // </Fragment>
  // );

  return (
    <>
      {/* <Timer counter={counter} /> */}

      <div className={style.panel}>
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
            {/* {parts} */}
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
