import { useState } from "react";

const quotecalculator = (props) => {
  const [enteredjobName, setEnteredjobName] = useState("");

  const jobnameInputChangeHandler = (event) => {
    setEnteredjobName(event.target.value);
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log(enteredjobName);
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="jobname">Job-Name</label>
        <input type="text" id="Job-Name" onChange={jobnameInputChangeHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default quotecalculator;
