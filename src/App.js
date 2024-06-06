import "./App.css";
import { Route, Routes, BrowserRouter as Router, } from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
