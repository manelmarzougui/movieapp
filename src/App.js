import { Route, Routes } from "react-router-dom";
import "./App.css";
import Description from "./components/Description";
import Home from "./components/Home";
import MovieListe from "./components/MovieListe";
function App() {
  return (
    <div className="App">
      <div style={{ width: "100%", backgroundColor: "black", hieght: "100px" }}>
        <img
          src="/movie.png"
          alt="logo"
          style={{
            width: "180px",
            height: "160px",
            marginLeft: "40%",
          }}
          className="test"
        />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
      </Routes>
    </div>
  );
}

export default App;
