import React, { useState, useEffect } from "react";
import style from "./CoinAnimation.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import Images from "./Images";

const CoinAnimation = () => {
  // const [counter, setCounter] = useState(1);
  const [animate, setAnimate] = useState(true);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  const animatedCoins = [
    { id: 1, src: require("../../assets/images/coin-1.png"), alt: "coin1" },
    { id: 2, src: require("../../assets/images/coin-2.png"), alt: "coin2" },
    { id: 3, src: require("../../assets/images/coin-3.png"), alt: "coin3" },
    { id: 4, src: require("../../assets/images/coin-4.png"), alt: "coin4" },

    { id: 5, src: require("../../assets/images/coin-5.png"), alt: "coin5" },
    { id: 6, src: require("../../assets/images/coin-6.png"), alt: "coin6" },
    { id: 7, src: require("../../assets/images/coin-7.png"), alt: "coin7" },
    { id: 8, src: require("../../assets/images/coin-8.png"), alt: "coin8" },
    { id: 9, src: require("../../assets/images/coin-9.png"), alt: "coin9" },
  ];
  return (
    <div className={style.container}>
      {/* <div>
        {animate &&
          animatedCoins.map((coin) => <Images src={coin.src} alt={coin.alt} />)}
      </div> */}
      <AnimatePresence>
        <motion.img
          animate={{ x: [0, 460, 600], y: [0, -200, 600] }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          src={require("../../assets/images/coin-1.png")}
          alt={"alt"}
          width={150}
          height={150}
        />
      </AnimatePresence>
    </div>
  );
};

export default CoinAnimation;

// "linear"
// "easeIn", "easeOut", "easeInOut"
// "circIn", "circOut", "circInOut"
// "backIn", "backOut", "backInOut"
// "anticipate"
