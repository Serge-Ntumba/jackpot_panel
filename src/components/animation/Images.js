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
    </div>
  );
};
export default Images;
