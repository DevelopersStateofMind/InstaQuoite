// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import { submitForm } from '../../redux/actions';
import useInput from "../../hooks/use-Input";
import { FloatingLabel, Form, Container } from "react-bootstrap";
import "./quotecalculator.css";

const isNotEmpty = (value) => value && value.trim() !== "";
const isEmail = (value) => value && value.includes("@");

const Quotecalculator = (props) => {
  //handleChange
  const {
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
    calculateTotal,
    total,
    state,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (isValid) {
    formIsValid = true;
  }
  //Submit Handler
  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    reset();
  };

  const jobNameClasses = hasError ? "form-control invalid" : "form-control";
  const dateClasses = hasError ? "form-control invalid" : "form-control";
  const emailClasses = hasError ? "form-control invalid" : "form-control";
  const mileageClasses = hasError ? "form-control invalid" : "form-control";
  const notarizeClasses = hasError ? "form-control invalid" : "form-control";
  const morefeesClasses = hasError ? "form-control invalid" : "form-control";

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
              name="jobName"
              value={state?.jobName?.value}
              onChange={valueChangeHandler}
              onBlur={inputBlurHandler}
            />
            {hasError && <p>Please Enter Job Name</p>}
          </div>
          <div className={dateClasses}>
            <label htmlFor="date">Job Date</label>
            <input
              type="date"
              name="jobDate"
              id="Job date"
              value={state?.jobDate?.value}
              onChange={valueChangeHandler}
              onBlur={valueChangeHandler}
            />
            {hasError && <p>Please Enter Job Date</p>}
          </div>
        </div>
        <div>
          <div className={emailClasses}>
            <label htmlFor="email">Client E-Mail Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={state?.email?.value}
              onChange={valueChangeHandler}
              onBlur={inputBlurHandler}
            />
            {hasError && <p>Please Enter Client Email Address</p>}
          </div>
          <div className={mileageClasses}>
            <label htmlFor="number">Round Trip Mileage</label>
            <input
              type="number"
              id="Round Trip Mileage"
              name="roundTripMileage"
              value={state?.roundTripMileage?.value}
              onChange={valueChangeHandler}
              onBlur={inputBlurHandler}
            />
            {hasError && <p>Please Enter Mileage</p>}
          </div>
          <div className="mb-3">
            <p> Choose A Job Type </p>
            <Form.Group
              value={state?.jobType?.value}
              onChange={valueChangeHandler}
            >
              <Form.Check
                type="radio"
                name="JobType"
                label="Loan Modification"
                value={20}
              />
              <Form.Check
                type="radio"
                name="JobType"
                label="Debt Consolidation"
                value={30}
              />
              <Form.Check
                type="radio"
                name="JobType"
                label="Auto Purchase"
                value={50}
              />
            </Form.Group>
          </div>
          <div className="mb-3">
            <p> Are you printing the Documents</p>
            <Form.Group
              value={state?.printingSet?.value}
              onChange={valueChangeHandler}
            >
              <Form.Check
                type="radio"
                name="printingSet"
                label="Yes"
                value={true}
              />
              <Form.Check
                type="radio"
                name="printingSet"
                label="No"
                value={false}
              />
            </Form.Group>
          </div>
          <div className="mb-3">
            <p> How Many Pages need to be Notarized?</p>
            <div className={notarizeClasses}>
              <label htmlFor="number">Pages to be notarized</label>
              <input
                type="number"
                name="pagesToBeNotarized"
                id="Pages to be Notarized"
                value={state?.pagesToBeNotarized?.value}
                onChange={valueChangeHandler}
                onBlur={inputBlurHandler}
              />
              {hasError && <p>Please Enter Pages to be Notarized</p>}
            </div>
            <div className="mb-3">
              <p> Is a witness required?</p>
              <Form.Group
                value={state?.witnessRequiredSet?.value}
                onChange={valueChangeHandler}
              >
                <Form.Check
                  type="radio"
                  name="witnessRequiredSet"
                  label="Yes"
                  value={5}
                />
                <Form.Check
                  type="radio"
                  name="witnessRequiredSet"
                  label="No"
                  value={0}
                />
              </Form.Group>
            </div>
            <div className="mb-3">
              <p> Do you have to pick up the witness?</p>
              <Form.Group
                value={state?.witnessPickupSet?.value}
                onChange={valueChangeHandler}
              >
                <Form.Check
                  type="radio"
                  name="witnessPickupSet"
                  label="Yes"
                  value={5}
                />
                <Form.Check
                  type="radio"
                  name="witnessPickupSet"
                  label="No"
                  value={0}
                />
              </Form.Group>
            </div>
            <div className={morefeesClasses}>
              <label htmlFor="name">Please Enter Additonal Service Name</label>
              <input
                type="text"
                id="name"
                name="additonalServiceName"
                value={state?.additonalServiceName?.value}
                onChange={valueChangeHandler}
                onBlur={inputBlurHandler}
              />
              {hasError && <p>Please Enter Additonal Service Name</p>}
              <label htmlFor="number">How much is that Service</label>
              <input
                type="number"
                id="How much is that Service"
                name="additonalServiceCost"
                value={state?.additonalServiceCost?.value}
                onChange={valueChangeHandler}
                onBlur={inputBlurHandler}
              />
              {hasError && <p>Please Enter service cost</p>}
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
        <button onClick={calculateTotal}>Calculate</button>
      </div>
    </form>
  );
};

export default Quotecalculator;
