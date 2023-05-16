const useAccumulate = (init, filteredArray) => {
  let result = filteredArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    init
  );
  if (isNaN(result)) {
    result = "Please select valid numbers";
  }
  return {
    result
  };
};
export default useAccumulate;
