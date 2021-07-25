import { Route } from "react-router-dom";
import AboutMe from "./aboutme/aboutme";
import Credits from "./credits/credits";
import DetailsofQuotes from "./detailsofquotes/detailsofquotes";
import Homepage from "./homepage/homepage";
import QuoteCalculator from "./quotecalculator/quotecalculator";
import Quotes from "./quotes/quotes";

const Routes = () => {
  return (
    <>
      <Route exact={true} path="/" render={() => <Homepage />} />
      <Route
        exact={true}
        path="/quotecalculator"
        render={() => <QuoteCalculator />}
      />
      <Route exact={true} path="/quotes" render={() => <Quotes />} />
      <Route
        exact={true}
        path="/detailsofquotes"
        render={() => <DetailsofQuotes />}
      />
      <Route exact={true} path="/aboutme" render={() => <AboutMe />} />
      <Route exact={true} path="/credits" render={() => <Credits />} />
    </>
  );
};

export default Routes;
