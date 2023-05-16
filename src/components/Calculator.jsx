import Display from "./Display";
import FunctionalButton from "./FunctionalButton";
import Row from "./Row";
import { useSelector, useDispatch } from "react-redux";
import { calculatorActions } from "../store/input-slice";
import TablesContainer from "../UI/TablesContainer";
import useAccumulate from "../hooks/useAccumulate";

const Calculator = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.calculationReducer.items);

  const filteredArray = data.map((el) => el.amount);
  const { result } = useAccumulate(0, filteredArray);

  const addNewRowHandler = (element) => {
    dispatch(calculatorActions.addItem());
  };

  return (
    <>
      <FunctionalButton
        title="Add Row"
        onClickButtonHandler={addNewRowHandler}
      />
      <TablesContainer>
        {data.map((element) => {
          return (
            <Row key={element.id} id={element.id} value={element.amount} />
          );
        })}
      </TablesContainer>
      <Display title="Result" result={result} />
    </>
  );
};
export default Calculator;
