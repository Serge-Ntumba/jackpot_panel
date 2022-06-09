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
    {
      id: 1,
      src: require("../../assets/images/coin-1.png"),
      alt: "coin1",
      width: 150,
      height: 150,
      x: [0, -600],
      y: [0, -300, 600],
      rotateX: 360,
      duration: 2.5,
    },
    {
      id: 2,
      src: require("../../assets/images/coin-2.png"),
      alt: "coin2",
      width: 50,
      height: 50,
      x: [0, -200],
      y: [0, -100, 800],
      rotateX: 360,
      duration: 2,
    },
    {
      id: 3,
      src: require("../../assets/images/coin-3.png"),
      alt: "coin3",
      width: 90,
      height: 90,
      x: [0, 100],
      y: [0, -310, 600],
      rotateX: 360,
      duration: 2.5,
      delay: 0.9,
    },
    {
      id: 4,
      src: require("../../assets/images/coin-4.png"),
      alt: "coin4",
      width: 120,
      height: 120,
      x: [0, -600],
      y: [0, -400, 800],
      rotateX: 360,
      duration: 3,
    },

    {
      id: 5,
      src: require("../../assets/images/coin-5.png"),
      alt: "coin5",
      width: 40,
      height: 40,
      x: [0, -300],
      y: [0, -280, 700],
      rotateX: 360,
      duration: 3,
      delay: 0.9,
    },
    {
      id: 6,
      src: require("../../assets/images/coin-6.png"),
      alt: "coin6",
      width: 150,
      height: 150,
      x: [0, -370],
      y: [0, -100, 600],
      rotateX: 360,
      duration: 1.7,
    },
    {
      id: 7,
      src: require("../../assets/images/coin-7.png"),
      alt: "coin7",
      width: 150,
      height: 150,
      x: [0, -200],
      y: [0, -400, 800],
      rotateX: 360,
      duration: 2.7,
    },
    {
      id: 8,
      src: require("../../assets/images/coin-8.png"),
      alt: "coin8",
      width: 90,
      height: 90,
      x: [0, -199],
      y: [0, -270, 600],
      rotateX: 360,
      duration: 2.7,
    },
    {
      id: 9,
      src: require("../../assets/images/coin-9.png"),
      alt: "coin9",
      width: 110,
      height: 110,
      x: [0, 400],
      y: [0, -410, 800],
      rotateX: 360,
      duration: 3.5,
    },

    {
      id: 10,
      src: require("../../assets/images/coin-10.png"),
      alt: "coin10",
      width: 120,
      height: 120,
      x: [0, 100],
      y: [0, -10, 600],
      rotateX: 360,
      duration: 3.5,
    },
    {
      id: 1,
      src: require("../../assets/images/coin-1.png"),
      alt: "coin1",
      width: 150,
      height: 150,
      x: [0, -500],
      y: [0, -300, 600],
      rotateX: 360,
      duration: 2,
    },
    {
      id: 11,
      src: require("../../assets/images/coin-11.png"),
      alt: "coin11",
      width: 50,
      height: 50,
      x: [0, 260],
      y: [0, -290, 700],
      rotateX: 360,
      duration: 1.4,
    },

    {
      id: 12,
      src: require("../../assets/images/coin-12.png"),
      alt: "coin12",
      width: 150,
      height: 150,
      x: [0, 350],
      y: [0, -410, 800],
      rotateX: 360,
      duration: 2.4,
    },
    {
      id: 13,
      src: require("../../assets/images/coin-13.png"),
      alt: "coin13",
      width: 97,
      height: 97,
      x: [0, 350],
      y: [0, -40, 600],
      rotateX: 360,
      duration: 2.4,
    },
    {
      id: 14,
      src: require("../../assets/images/coin-14.png"),
      alt: "coin14",
      width: 40,
      height: 40,
      x: [0, 50],
      y: [0, -340, 800],
      rotateX: 360,
      duration: 1.4,
    },
    {
      id: 15,
      src: require("../../assets/images/coin-15.png"),
      alt: "coin15",
      width: 140,
      height: 140,
      x: [0, 350],
      y: [0, -130, 600],
      rotateX: 360,
      duration: 2.4,
    },
    {
      id: 16,
      src: require("../../assets/images/coin-16.png"),
      alt: "coin16",
      width: 170,
      height: 170,
      x: [0, 150],
      y: [0, -300, 800],
      rotateX: 360,
      duration: 3,
    },

    {
      id: 17,
      src: require("../../assets/images/coin-17.png"),
      alt: "coin17",
      width: 60,
      height: 60,
      x: [0, 350],
      y: [0, -330, 600],
      rotateX: 360,
      duration: 3,
    },
    {
      id: 18,
      src: require("../../assets/images/coin-1.png"),
      alt: "coin1",
      width: 150,
      height: 150,
      x: [0, -500],
      y: [0, -300, 600],
      rotateX: 360,
      duration: 3,
    },
  ];

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
              delay: coin.delay,

              // coin.rotate,
            }}
            transition={{
              duration: coin.duration,
              ease: "easeOut",
              rotateX: { delay: 1 },
            }}
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
