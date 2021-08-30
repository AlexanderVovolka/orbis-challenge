import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Stocks from "./components/Pages/Stocks";
import StocksDetails from "./components/Pages/StocksDetails";
import Paths from "./constants/paths";

import { theme } from "./theme";

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route exact path={Paths.Stocks} component={Stocks} />
          <Route exact path={Paths.StocksDetails} component={StocksDetails} />

          <Redirect to={Paths.Stocks} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
