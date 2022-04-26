import React from "react";

//import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Page from "./pages/components/Page";
import Error from "./pages/Error";
import Recruitment from "./pages/components/Recruitment/Recruitment";
import NewsLetter from './pages/components/NewsLetter/NewsLetter';

function App(){
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/recruitment" element={<Page title="Recruitment" pageContent={<Recruitment/>}/>} />
          <Route path="/newsletter" element={<Page title="News Letter" pageContent={<NewsLetter/>}/>} />

          <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
