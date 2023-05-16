import React from "react";

const FunctionalButton = (props) => {
  const clickHandler = (event) => {
    props.onClickButtonHandler();
  };
  return <button onClick={clickHandler}>{props.title}</button>;
};
export default FunctionalButton;
