import { Switch } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact={true} path="/" render={() => <p>Home Page</p>} />
        <Route
          exact={true}
          path="/quotecalculator"
          render={() => <p>Quote Calculator</p>}
        />
        <Route exact={true} path="/quotes" render={() => <p>Quotes</p>} />
        <Route
          exact={true}
          path="/detailsofquote"
          render={() => <p>DetailsofQuote</p>}
        />
        <Route exact={true} path="/aboutme" render={() => <p>AboutMe</p>} />
        <Route exact={true} path="/credits" render={() => <p>Credits</p>} />
      </Switch>
    </main>
  );
};

export default Main;
