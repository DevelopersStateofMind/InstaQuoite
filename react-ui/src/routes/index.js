import { Route } from "react-router-dom";
import Homepage from "./homepage/homepage";
import QuoteCalculator from "./quotecalculator/quotecalculator";
import QuoteSummary from "./quoteSummary/quoteSummary";
import ListofQuotes from "./listofquotes/listofquotes";
import About from "./about/about";

const Routes = () => {
  return (
    <>
      <Route exact={true} path="/" render={() => <Homepage />} />
      <Route
        exact={true}
        path="/quotecalculator"
        render={() => <QuoteCalculator />}
      />
      <Route
        exact={true}
        path="/quotesummary"
        render={() => <QuoteSummary />}
      />
      <Route
        exact={true}
        path="/listofquotes"
        render={() => <ListofQuotes />}
      />
      <Route exact={true} path="/about" render={() => <About />} />
    </>
  );
};

export default Routes;
