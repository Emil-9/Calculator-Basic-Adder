import React from "react";

const InputValue = (props) => {
  const changeValueHandler = (event) => {
    const NewValue = event.target.value;
    props.onChangeInputHandler(NewValue);
  };
  return (
    <input
      value={props.value}
      onChange={changeValueHandler}
      type={props.type}
    />
  );
};
export default InputValue;
