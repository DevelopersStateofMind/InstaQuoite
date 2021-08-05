import { useSelector } from "react";
import useInput from "../../hooks/use-Input";
import { FloatingLabel, Form } from "react-bootstrap";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const Quotecalculator = (props) => {
  const {
    value: jobNameValue,
    isValid: jobNameIsValid,
    hasError: jobNameHasError,
    valueChangeHandler: jobNameChangeHandler,
    inputBlurHandler: jobNameBlurHandler,
    reset: resetjobName,
  } = useInput(isNotEmpty);
  const {
    value: jobDateValue,
    isValid: jobDateIsValid,
    hasError: dateHasError,
    valueChangeHandler: jobDateChangeHandler,
    inputBlurHandler: jobDateBlurHandler,
    reset: resetjobDate,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetemail,
  } = useInput(isEmail);
  const {
    value: mileageValue,
    isValid: mileageIsValid,
    hasError: mileageHasError,
    valueChangeHandler: mileageChangeHandler,
    inputBlurHandler: mileageBlurHandler,
    reset: resetmileage,
  } = useInput(isNotEmpty);
  const {
    value: hrRateValue,
    isValid: hrRateIsValid,
    hasError: hrRateHasError,
    valueChangeHandler: hrRateChangeHandler,
    inputBlurHandler: hrRateBlurHandler,
    reset: resethrRate,
  } = useInput(isNotEmpty);
  const {
    value: estHoursValue,
    isValid: estHoursIsValid,
    hasError: estHoursHasError,
    valueChangeHandler: estHoursChangeHandler,
    inputBlurHandler: estHoursBlurHandler,
    reset: resetestHours,
  } = useInput(isNotEmpty);
  const {
    value: materialCostsValue,
    isValid: materialCostsIsValid,
    hasError: materialCostsHasError,
    valueChangeHandler: materialCostsChangeHandler,
    inputBlurHandler: materialCostsBlurHandler,
    reset: resetmaterialCosts,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (
    jobNameIsValid &&
    jobDateIsValid &&
    emailIsValid &&
    mileageIsValid &&
    hrRateIsValid &&
    estHoursIsValid &&
    materialCostsIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(
      jobNameValue,
      jobDateValue,
      emailValue,
      mileageValue,
      hrRateValue,
      estHoursValue,
      materialCostsValue
    );

    resetjobName();
    resetjobDate();
    resetemail();
    resetmileage();
    resethrRate();
    resetestHours();
    resetmaterialCosts();
  };

  const jobNameClasses = jobNameHasError
    ? "form-control invalid"
    : "form-control";
  const dateClasses = dateHasError ? "form-control invalid" : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const mileageClasses = mileageHasError
    ? "form-control invalid"
    : "form-control";
  const hrRateClasses = hrRateHasError
    ? "form-control invalid"
    : "form-control";
  const estHoursClasses = estHoursHasError
    ? "form-control invalid"
    : "form-control";
  const materialCostsClasses = materialCostsHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="calc-header">
        <h1> Quote Calculator</h1>
      </div>
      <div className="control-group">
        <div className={jobNameClasses}>
          <label htmlFor="name">Job Name</label>
          <input
            type="text"
            id="name"
            value={jobNameValue}
            onChange={jobNameChangeHandler}
            onBlur={jobNameBlurHandler}
          />
          {jobNameHasError && <p>Please Enter Job Name</p>}
        </div>
        <div className={dateClasses}>
          <label htmlFor="date">Job Date</label>
          <input
            type="date"
            id="Job date"
            value={jobDateValue}
            onChange={jobDateChangeHandler}
            onBlur={jobDateBlurHandler}
          />
          {dateHasError && <p>Please Enter Job Date</p>}
        </div>
      </div>
      <div>
        <div className={emailClasses}>
          <label htmlFor="email">Client E-Mail Address</label>
          <input
            type="email"
            id="email"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && <p>Please Enter Client Email Address</p>}
        </div>
        <div className={mileageClasses}>
          <label htmlFor="number">Round Trip Mileage</label>
          <input
            type="number"
            id="Round Trip Mileage"
            value={mileageValue}
            onChange={mileageChangeHandler}
            onBlur={mileageBlurHandler}
          />
          {mileageHasError && <p>Please Enter Mileage</p>}
        </div>
        <div className={hrRateClasses}>
          <label htmlFor="number">Hourly Rate</label>
          <input
            type="number"
            id="Hourly Rate"
            value={hrRateValue}
            onChange={hrRateChangeHandler}
            onBlur={hrRateBlurHandler}
          />
          {hrRateHasError && <p>Please Enter Your Hourly Rate</p>}
        </div>
        <div>
          <div className={estHoursClasses}>
            <label htmlFor="number">Total Amount of Hours</label>
            <input
              type="number"
              id="Total Amount of Hours"
              value={estHoursValue}
              onChange={estHoursChangeHandler}
              onBlur={estHoursBlurHandler}
            />
            {estHoursHasError && (
              <p>Please Enter Total Amount of Hours to complete this job</p>
            )}
          </div>
          <div className={materialCostsClasses}>
            <label htmlFor="number">Estimated Material Costs</label>
            <input
              type="number"
              id="Estimated Material Costs"
              value={materialCostsValue}
              onChange={materialCostsChangeHandler}
              onBlur={materialCostsBlurHandler}
            />
            {materialCostsHasError && (
              <p>Please Enter Total Amount of Hours to complete this job</p>
            )}
          </div>
          <>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Additional Details"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave additional details here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Any Reciepts</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </>
        </div>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Calculate</button>
      </div>
    </form>
  );
};

export default Quotecalculator;
