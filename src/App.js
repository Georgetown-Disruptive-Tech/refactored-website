import { 
  React, 
  Component,
  useState
} from "react";
import ReactDOM from "react-dom";
import MailchimpSubscribe from "react-mailchimp-subscribe";


//import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";

import Home from "./components/Home";
import Recruitment from "./components/Recruitment";

const url =
  "https://domains.us4.list-manage.com/subscribe/post?u=da48ecb7a5439e08f4de18e0e&amp;id=539c6d6da7";

export default function App(){
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route 
              path="/" 
              element={<Home/>} 
            />
            <Route 
              path="/recruitment" 
              element={<Recruitment/>} 
            />

            <Navigate to="/" />
        </Routes>
      </Router>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
