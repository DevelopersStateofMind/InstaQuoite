import { useReducer, useState } from "react";
const initialInputState = {};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      ...state,
      name: action.name,
      value: action.value,
      isTouched: action.isTouched,
      [action.name]: {
        id: action.id,
        value: action.value,
      },
    };
  }
  if (action.type === "BLUR") {
    return { ...state, isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { ...state, isTouched: false, value: "" };
  }
  return inputStateReducer;
};

const useInput = (validateValue) => {
  const [total, updateTotal] = useState(0);
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({
      type: "INPUT",
      id: event.target.id,
      name: event.target.name,
      value: event.target.value,
    });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const calculateTotal = () => {
    const roundTripMileage = inputState?.roundTripMileage?.value * 0.2 || 0;
    const jobType = inputState?.jobType?.value || 0;
    const pagesToBeNotarized = inputState?.pagesToBeNotarized?.value * 0.1 || 0;
    const witnessRequired = inputState?.witnessRequiredSet?.value || 0;
    const witnessPickup = inputState?.witnessPickupSet?.value || 0;
    const additionalServiceCost = inputState?.additonalServiceCost?.value || 0;

    updateTotal(
      roundTripMileage +
        parseInt(jobType) +
        pagesToBeNotarized +
        parseInt(witnessRequired) +
        parseInt(witnessPickup) +
        additionalServiceCost
    );
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
    state: { ...inputState },
    calculateTotal,
    total,
  };
};
//Keep in mind that the hook and custom hooks in general should be generic-it's notlimited to one specific input!
export default useInput;
