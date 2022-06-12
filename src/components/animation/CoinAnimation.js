import React, { useState, useEffect } from "react";
import style from "./CoinAnimation.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import Images from "./Images";
import { animatedCoins } from "./Coins";

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

  return (
    <div className={style.container}>
      {/* <div>
        {animate &&
          animatedCoins.map((coin) => <Images src={coin.src} alt={coin.alt} />)}
      </div> */}
      <AnimatePresence>
        {animatedCoins.map((coin) => (
          <motion.img
            className={style.containerCoins}
            animate={{
              x: coin.x,
              y: coin.y,
              rotateX: coin.rotateX,
            }}
            transition={{
              duration: coin.duration,
              ease: "easeOut",
              rotateX: { delay: 1.5 },
            }}
            exit={{ opacity: 0, x: 0, y: 0 }}
            src={coin.src}
            alt={coin.alt}
            width={coin.width}
            height={coin.height}
          />
        ))}
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
