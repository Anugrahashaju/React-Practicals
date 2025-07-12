import { Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./Form";
import Error from "./Error";
import Welcome from "./Welcome";

function App() {
  return (
    <div style={{ width: "100%", height:"100%" }}>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/error" element={<Error />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
