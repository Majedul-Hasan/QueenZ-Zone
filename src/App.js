import "./App.css";
import Layout from "./Components/Home/Layout";
import NaviBar from "./Components/NaviBar/NaviBar";

function App() {
  return (
    <div className="App">
      {/* home page layout */}
      <Layout></Layout>
      <NaviBar></NaviBar>
    </div>
  );
}

export default App;
