import { useHistory } from "react-router-dom";
const QuoteSummary = (props) => {
  const history = useHistory();
  const total = history?.location?.state?.total || 0;
  console.log(history.location.state);
  return (
    <>
      <div className="quote-summary-header">
        <h1>Quote Summary</h1>
        <h3>
          {" "}
          {history.location.state.formdata.jobName.id}:
          {history.location.state.formdata.jobName.value}
        </h3>
        <h2>${Number(total).toFixed(2)}</h2>
      </div>
    </>
  );
};

export default QuoteSummary;
