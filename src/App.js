import "./App.css";
import Home from "./pages/Home";
import NigelServices from "./pages/NigelServices";
import SingleRoom from "./pages/SingleRoom";
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
        <Route exact path="/nigelservices/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
