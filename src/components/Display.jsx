import React from "react";
import classes from "./Display.module.css";
const Display = (props) => {
  return (
    <div className={classes.display}>
      <h3>{props.title}</h3>
      <h2>{props.result}</h2>
    </div>
  );
};
export default Display;
