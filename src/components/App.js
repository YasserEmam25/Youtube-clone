import "../css/App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos.js";

function App() {
  return (
    <div className="App">
      {/* Headder <Header />*/}
      <Header />

      <div className="app-page">
        {/* sidebar <Sidebar /> */}
        <Sidebar />
        {/* Recommended videos  */}
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
