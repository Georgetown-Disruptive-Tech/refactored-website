import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";


//import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./components/Home";
import Recruitment from "./components/Recruitment";
import Error from "./components/Error";

const url =
  "https://domains.us4.list-manage.com/subscribe/post?u=da48ecb7a5439e08f4de18e0e&amp;id=539c6d6da7";

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
