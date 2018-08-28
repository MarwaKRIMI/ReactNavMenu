import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./style.css";

// /services/b2b
// /services/b2c

const Home = () => <h1>Home components here</h1>;

const ServicesComp = () => {
  return (
    <ul>
      <li>
        {" "}
        <Link to="/services/entrepreneurs" className="entrepreneurs">
          {" "}
          For entrepreneurs
        </Link>
      </li>
      <li>
        {" "}
        <Link to="/services/students" className="students">
          For students
        </Link>
      </li>
      <li>
        {" "}
        <Link to="/services/hobbyists" className="hobbyists">
          For hobbyists
        </Link>
      </li>
    </ul>
  );
};

const Contact = () => <h1>Contact components here</h1>;

const Main = () => (
  <div>
    <h1>React NavMenu</h1>
    <Link className="home" to="/home">
      Home{" "}
    </Link>
    <Link className="services" to="/services">
      Services
    </Link>
    <Link className="contact" to="/contact">
      Contact{" "}
    </Link>
    <div>
      <Route exact path="/home" component={Home} />
      <Route path="/services" component={ServicesComp} />
      <Route path="/contact" component={Contact} />
    </div>
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);
