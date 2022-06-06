import React from "react";
import { motion } from "framer-motion";
import style from "./Images.module.scss";

const Images = ({ src, alt }) => {
  return (
    <div className={style.container}>
      <motion.img
        initial={{ y: -300 }}
        animate={{ y: "100vh", rotateX: 900 }}
        transition={{ duration: 9 }}
        src={src}
        alt={alt}
        width={150}
        height={150}
      />
      <motion.img
        initial={{ y: -200 }}
        animate={{ y: "100vh", rotateX: 900 }}
        transition={{ duration: 6 }}
        src={src}
        alt={alt}
        width={100}
        height={100}
      />

      <motion.img
        initial={{ y: -300 }}
        animate={{ y: "100vh", rotateX: 500 }}
        transition={{ duration: 7 }}
        src={src}
        alt={alt}
        width={180}
        height={180}
      />

      <motion.img
        initial={{ y: -300 }}
        animate={{ y: "100vh", rotateX: 500 }}
        transition={{ duration: 8 }}
        src={src}
        alt={alt}
        width={110}
        height={110}
      />

      <motion.img
        initial={{ y: -300 }}
        animate={{ y: "100vh", rotateX: 500 }}
        transition={{ duration: 6 }}
        src={src}
        alt={alt}
        width={210}
        height={210}
      />

      <motion.img
        initial={{ y: -300 }}
        animate={{ y: "100vh", rotateX: 500 }}
        transition={{ duration: 7 }}
        src={src}
        alt={alt}
        width={180}
        height={180}
      />

      <motion.img
        initial={{ y: -300 }}
        animate={{ y: "100vh", rotateX: 500 }}
        transition={{ duration: 7 }}
        src={src}
        alt={alt}
        width={140}
        height={140}
      />

      <motion.img
        initial={{ y: -100 }}
        animate={{ y: "100vh", rotateX: 500 }}
        transition={{ duration: 8 }}
        src={src}
        alt={alt}
        width={100}
        height={100}
      />

      <motion.img
        initial={{ y: -300 }}
        animate={{ y: "100vh", rotateX: 500 }}
        transition={{ duration: 8 }}
        src={src}
        alt={alt}
        width={110}
        height={110}
      />

      <motion.img
        initial={{ y: -300 }}
        animate={{ y: "100vh", rotateX: 500 }}
        transition={{ duration: 6 }}
        src={src}
        alt={alt}
        width={190}
        height={190}
      />

      <motion.img
        initial={{ y: -300 }}
        animate={{ y: "100vh", rotateX: 500 }}
        transition={{ duration: 8 }}
        src={src}
        alt={alt}
        width={210}
        height={210}
      />

      <motion.img
        initial={{ y: -300 }}
        animate={{ y: "100vh", rotateX: 500 }}
        transition={{ duration: 6 }}
        src={src}
        alt={alt}
        width={100}
        height={100}
      />
    </div>
  );
};
export default Images;
