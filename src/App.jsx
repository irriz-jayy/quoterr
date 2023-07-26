// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Categories from "./components/Categories";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
