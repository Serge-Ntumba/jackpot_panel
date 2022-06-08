import React from "react";
import Diamond from "./Diamond";
import style from "./JackpotFullPanel.module.scss";

const JackpotFullPanel = () => {
  return (
    <div className={style.container}>
      <Diamond />
    </div>
  );
};

export default JackpotFullPanel;
