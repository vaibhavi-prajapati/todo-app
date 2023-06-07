import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import AddTodo from "./components/AddTodo";
import "bootstrap/dist/css/bootstrap.css";
// import "font-awesome/css/font-awesome.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import history from './history';
import DefaultLayout from "./components/DefaultLayout";

class App extends Component {
  getUser = () => {
    if (sessionStorage.getItem("user") || window.location.pathname == "/") {
    } else {
      window.location.href = "/"
    }
  }
  componentDidMount() {
    this.getUser()
  }
  render() {
    return (
      // <div className="text-center">
      <BrowserRouter history={history}>
        <DefaultLayout />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/add" element={<AddTodo />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
      // </div>
    );
  }
}

export default App;
