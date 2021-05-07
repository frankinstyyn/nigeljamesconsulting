import "./App.css";
import Home from "./pages/Home";
import NigelServices from "./pages/NigelServices";
import Golf from "./pages/Golf";
import Error from "./pages/Error";
import About from "./pages/About"

import { Route, Switch } from "react-router-dom";

import NewNav from "./components/NewNav";

function App() {
  return (
    <>
      <NewNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/nigelservices" component={NigelServices} />
        <Route exact path="/about" component={About} />
        <Route exact path="/golf" component={Golf} />
        <Route exact path="/nigelservices/:slug" component={Error} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
