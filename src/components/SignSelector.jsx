const SignSelector = (props) => {
  const changeSignHandler = (event) => {
    props.onSignChange(event.target.value);
  };
  return (
    <select onChange={changeSignHandler}>
      <option value="+">+</option>
      <option value="-">-</option>
    </select>
  );
};
export default SignSelector;
