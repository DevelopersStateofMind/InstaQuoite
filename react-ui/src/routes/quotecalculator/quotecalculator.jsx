// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import { submitForm } from '../../redux/actions';

import useInput from "../../hooks/use-Input";
import {
  FloatingLabel,
  Form,
  Container,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import "./quotecalculator.css";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const Quotecalculator = (props) => {
  // const Quotecalculator = ({isSubmitted, submitForm}) => {

  //handleChange
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
    value: notarizeValue,
    isValid: notarizeIsValid,
    hasError: notarizeHasError,
    valueChangeHandler: notarizeChangeHandler,
    inputBlurHandler: notarizeBlurHandler,
    reset: resetnotarize,
  } = useInput(isNotEmpty);

  const {
    value: morefeesValue,
    isValid: morefeesIsValid,
    hasError: morefeesHasError,
    valueChangeHandler: morefeesChangeHandler,
    inputBlurHandler: morefeesBlurHandler,
    reset: resetmorefees,
  } = useInput(isNotEmpty);

  const { valueChangeHandler: witnessChangeHandler, value: witnessValue } =
    useInput(isNotEmpty);

  let formIsValid = false;
  if (
    jobNameIsValid &&
    jobDateIsValid &&
    emailIsValid &&
    mileageIsValid &&
    notarizeIsValid &&
    morefeesIsValid
  ) {
    formIsValid = true;
  }
  //Submit Handler
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
      notarizeValue,
      morefeesValue
    );

    resetjobName();
    resetjobDate();
    resetemail();
    resetmileage();
    resetnotarize();
    resetmorefees();
  };

  const jobNameClasses = jobNameHasError
    ? "form-control invalid"
    : "form-control";
  const dateClasses = dateHasError ? "form-control invalid" : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const mileageClasses = mileageHasError
    ? "form-control invalid"
    : "form-control";
  const notarizeClasses = notarizeHasError
    ? "form-control invalid"
    : "form-control";
  const morefeesClasses = morefeesHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="calc-header">
        <h1> Quote Calculator</h1>
      </div>
      <Container fluid="md">
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
          <div className="mb-3">
            <p> Choose A Job Type </p>
            <Form.Check
              type="radio"
              id="Loan Modification"
              label="Loan Modification"
            />

            <Form.Check
              type="radio"
              id="Debt Consolidation"
              label="Debt Consolidation"
            />
            <Form.Check type="radio" id="Auto Purchase" label="Auto Purchase" />
          </div>
          <div className="mb-3">
            <p> Are you printing the Documents</p>
            <Form.Check type="radio" id="Yes" label="Yes" />

            <Form.Check type="radio" id="No" label="No" />
          </div>
          <div className="mb-3">
            <p> How Many Pages need to be Notarized?</p>
            <div className={notarizeClasses}>
              <label htmlFor="number">Pages to be notarized</label>
              <input
                type="number"
                id="Pages to be Notarized"
                value={notarizeValue}
                onChange={notarizeChangeHandler}
                onBlur={notarizeBlurHandler}
              />
              {notarizeHasError && <p>Please Enter Pages to be Notarized</p>}
            </div>

            <div className="mb-3">
              <p> Is a witness required?</p>
              <Form.Group value={witnessValue} onChange={witnessChangeHandler}>
                <Form.Check
                  type="radio"
                  name="witnessRequiredSet"
                  label="Yes"
                  value={true}
                />
                <Form.Check
                  type="radio"
                  name="witnessRequiredSet"
                  label="No"
                  value={false}
                />
              </Form.Group>
            </div>
            <div className="mb-3">
              <p> Do you have to pick up the witness?</p>
              <Form.Check type="radio" id="Yes" label="Yes" />

              <Form.Check type="radio" id="No" label="No" />
            </div>
            <div className={morefeesClasses}>
              <label htmlFor="name">Please Enter Additonal Service Name</label>
              <input
                type="text"
                id="name"
                value={morefeesValue}
                onChange={morefeesChangeHandler}
                onBlur={morefeesBlurHandler}
              />
              {morefeesHasError && <p>Please Enter Additonal Service Name</p>}
              <label htmlFor="number">How much is that Service</label>
              <input
                type="number"
                id="How much is that Service"
                value={notarizeValue}
                onChange={notarizeChangeHandler}
                onBlur={notarizeBlurHandler}
              />
              {notarizeHasError && <p>Please Enter service cost</p>}
            </div>
          </div>
        </div>
        <div>
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
      </Container>
      <div className="form-actions">
        <button disabled={!formIsValid}>Calculate</button>
      </div>
    </form>
  );
};

export default Quotecalculator;
