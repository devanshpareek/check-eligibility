import "./App.css";
import CallPredictor from "./Pages/CallPredictor";
import EligibiltyForm from "./Pages/EligibiltyForm";
import Home from "./Pages/Home";
import {
  BrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/eligibility" element={<EligibiltyForm />} />
          <Route path="/call-predictor" element={<CallPredictor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
