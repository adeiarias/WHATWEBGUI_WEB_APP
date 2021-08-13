import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./components/Pages/About";
import { History } from "./components/Pages/History";
import Main from "./components/Pages/Main";
import Scan from "./components/Pages/Scan";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/scan" component={Scan} />
            <Route path="/about" component={About} />
            <Route path="/history" component={History} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
