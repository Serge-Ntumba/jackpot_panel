import React, { Fragment } from "react";
import style from "./Parts.module.scss";

const Parts = ({ x, y, accumulated }) => {
  return (
    <Fragment>
      <div className={accumulated ? style.panelCherryAcc : style.panelCherry}>
        <img
          width="120"
          height="117"
          className="parallax"
          style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
          data-value="-2"
          src={require("./../assets/images/cherry.png")}
          alt=""
        />{" "}
      </div>
      <div className={accumulated ? style.panelCupAcc : style.panelCup}>
        {" "}
        <img
          width="120"
          height="132"
          className="parallax"
          style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
          data-value="6"
          src={require("./../assets/images/cup.png")}
          alt=""
        />{" "}
      </div>

      <div className={accumulated ? style.panelDiAcc : style.panelDi}>
        {" "}
        <img
          width="70"
          height="70"
          className="parallax"
          style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
          data-value="-9"
          src={require("./../assets/images/di.png")}
          alt=""
        />{" "}
      </div>
      <div className={style.panelBul}>
        {" "}
        <img
          width="50"
          height="130"
          className="parallax"
          style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
          data-value="-5"
          src={require("./../assets/images/bul.png")}
          alt=""
        />{" "}
      </div>
      <div className={accumulated ? style.panelCup2Acc : style.panelCup2}>
        {" "}
        <img
          width="120"
          height="132"
          data-value="3"
          className="parallax"
          style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
          src={require("./../assets/images/cup-2.png")}
          alt=""
        />{" "}
      </div>
      <div
        className={
          accumulated ? style.panelDiamondPartAcc : style.panelDiamondPart
        }
      >
        {" "}
        <img
          width="67"
          height="85"
          className="parallax"
          style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
          data-value="-7"
          src={require("./../assets/images/diamondPart.png")}
          alt=""
        />{" "}
      </div>
      <div className={accumulated ? style.panelDi2Acc : style.panelDi2}>
        {" "}
        <img
          width="70"
          height="70"
          className="parallax"
          style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
          data-value="2"
          src={require("./../assets/images/di.png")}
          alt=""
        />{" "}
      </div>
      <div className={style.panelBel}>
        {" "}
        <img
          width="70"
          height="70"
          className="parallax"
          style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
          data-value="-9"
          src={require("./../assets/images/bel.png")}
          alt=""
        />{" "}
      </div>
      <div className={accumulated ? style.panelRond4Acc : style.panelRond4}>
        {" "}
        <img
          width="130"
          height="100"
          className="parallax"
          style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
          data-value="5"
          src={require("./../assets/images/rond4.png")}
          alt=""
        />{" "}
      </div>
      <div className={accumulated ? style.panelRond5Acc : style.panelRond5}>
        {" "}
        <img
          width="100"
          height="60"
          className="parallax"
          style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
          data-value="-8"
          src={require("./../assets/images/rond5.png")}
          alt=""
        />{" "}
      </div>
      <div className={accumulated ? style.panelRond3Acc : style.panelRond3}>
        {" "}
        <img
          width="130"
          height="100"
          className="parallax"
          style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
          data-value="3"
          src={require("./../assets/images/rond3.png")}
          alt=""
        />{" "}
      </div>
      <div
        className={accumulated ? style.panelTriangleAcc : style.panelTriangle}
      >
        {" "}
        <img
          width="45"
          height="45"
          className="parallax"
          style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
          data-value="-4"
          src={require("./../assets/images/triangle.png")}
          alt=""
        />{" "}
      </div>
      <div
        className={accumulated ? style.panelTriangle2Acc : style.panelTriangle2}
      >
        {" "}
        <img
          width="45"
          height="45"
          className="parallax"
          style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
          data-value="9"
          src={require("./../assets/images/triangle.png")}
          alt=""
        />{" "}
      </div>
      <div className={accumulated ? style.panelFlowerAcc : style.panelFlower}>
        {" "}
        <img
          className="parallax"
          style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
          data-value="-6"
          src={require("./../assets/images/flower.png")}
          alt=""
        />{" "}
      </div>
      <div className={style.panelBulChoco}>
        {" "}
        <img
          width="60"
          height="84"
          className="parallax"
          style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
          data-value="2"
          src={require("./../assets/images/bulChoco.png")}
          alt=""
        />{" "}
      </div>
      <div className={style.panelRond1}>
        {" "}
        <img
          width="100"
          height="60"
          data-value="-4"
          className="parallax"
          style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
          src={require("./../assets/images/rond1.png")}
          alt=""
        />{" "}
      </div>
      <div className={style.panelRond11}>
        {" "}
        <img
          width="100"
          height="60"
          data-value="7"
          className="parallax"
          style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
          src={require("./../assets/images/rond1.png")}
          alt=""
        />{" "}
      </div>
    </Fragment>
  );
};

export default Parts;
