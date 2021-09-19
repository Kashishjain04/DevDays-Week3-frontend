import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Assignment from "./pages/Assignment";
import Submissions from "./pages/Submissions";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Assignment} />
          <Route exact path="/submissions" component={Submissions} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
