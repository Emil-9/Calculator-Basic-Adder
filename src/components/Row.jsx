import { useEffect, useReducer } from "react";
import FunctionalButton from "./FunctionalButton";
import InputValue from "./InputValue";
import SignSelector from "./SignSelector";
import { useDispatch } from "react-redux";
import { calculatorActions } from "../store/input-slice";
import classes from "./Row.module.css";

const Row = (props) => {
  let RowId = props.id;
  const initialInputState = {
    inputValue: props.value,
    inputSign: "+",
    isDeleted: false,
    isDisabled: false
  };
  const InputReducer = (state, action) => {
    if (action.type === "INPUT") {
      return {
        ...state,
        inputValue: action.value
      };
    }
    if (action.type === "DELETE") {
      return {
        ...state,
        isDeleted: true
      };
    }
    if (action.type === "DISABLE") {
      return {
        ...state,
        isDisabled: !state.isDisabled
      };
    }
    if (action.type === "SIGN_SELECTOR") {
      return {
        ...state,
        inputSign: action.inputSign
      };
    }
    return initialInputState;
  };
  const [inputState, dispatchInput] = useReducer(
    InputReducer,
    initialInputState
  );

  const dispatch = useDispatch();

  const deleteRowHandler = () => {
    dispatch(calculatorActions.removeItem({ id: RowId }));
    dispatchInput({ type: "DELETE" });
  };

  const disableRowHandler = () => {
    dispatchInput({ type: "DISABLE" });
  };

  const changedValueHandler = (el) => {
    let valueOfInput = el;
    if (el === "") {
      valueOfInput = 0;
    }
    dispatchInput({ type: "INPUT", value: valueOfInput });
  };

  const signChangeHnadler = (el) => {
    dispatchInput({ type: "SIGN_SELECTOR", inputSign: el });
  };

  useEffect(() => {
    // timer here if we want to delay the result while the user finish typing
    const timer = setTimeout(() => {
      if (!inputState.isDisabled) {
        dispatch(
          calculatorActions.reCalculate({
            id: RowId,
            amount: inputState.inputValue,
            sign: inputState.inputSign
          })
        );
      } else {
        dispatch(
          calculatorActions.reCalculate({
            id: RowId,
            amount: 0,
            sign: inputState.inputSign
          })
        );
      }
    }, 100); // 100ms

    return () => clearTimeout(timer);
  }, [
    inputState.isDisabled,
    inputState.inputValue,
    inputState.inputSign,
    dispatch,
    RowId
  ]);
  return (
    !inputState.isDeleted && (
      <li className={classes["row-item"]}>
        <SignSelector onSignChange={signChangeHnadler} />
        <InputValue
          id={RowId}
          onChangeInputHandler={changedValueHandler}
          type="number"
          value={inputState.inputValue}
        />
        <FunctionalButton
          title="Delete"
          onClickButtonHandler={deleteRowHandler}
        />
        <FunctionalButton
          title={inputState.isDisabled ? "Enable" : "Disable"}
          onClickButtonHandler={disableRowHandler}
        />
      </li>
    )
  );
};
export default Row;
