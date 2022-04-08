import React from "react";

//import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Recruitment from "./pages/components/Recruitment/Recruitment";
import Error from "./pages/Error";


function App(){
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/recruitment" element={<Recruitment />} />

          <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
