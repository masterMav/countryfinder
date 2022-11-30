import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import Region from "./Region";
import Search from "./Search";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="nothing">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/lang">
              <Search />
            </Route>
            <Route path="/region">
              <Region />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
