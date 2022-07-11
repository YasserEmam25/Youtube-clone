import "../css/App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Headder <Header />*/}
        {/* <Header /> */}

        <Switch>
          <Route path="/">Home page</Route>

          <Route path="/search">search</Route>
        </Switch>
      </Router>

      <div className="app-page">
        {/* sidebar <Sidebar /> */}
        {/* <Sidebar /> */}
        {/* Recommended videos  */}
        {/* <RecommendedVideos /> */}
      </div>
    </div>
  );
}

export default App;
