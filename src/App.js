// import logo from './logo.svg';
import './App.css';
// import UseMemoDemo from './UseMemoDemo';
// import { LifeCycleHook } from './LifeCycle';
import { BrowserRouter, Routes, Route, Link, Navigate, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from './Login';
import Dashboard from './pages/Dashboard';
import College from './pages/College';
import Teacher from './pages/Teacher';
import Student from './pages/Student';
import ReactHookForm from './pages/ReactHookForm';
import UnControlledComp from './pages/unControlledComp';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import UseMemoDemo from './UseMemoDemo';
import Users from './pages/Users';
import User from './pages/User';
import Counter from './pages/Counter';
import { useEffect, useState } from 'react';
import UseEffectDemo from './pages/useEffectDemo';
import useContextSol from './pages/useContextSol';
import useContextDemo from './pages/useContextDemo';
import LifeCycleDemo from './pages/lifeCycleDemo';
import ConditionalDemo from './pages/conditionalDemo';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <BrowserRouter>
      {isLoggedIn && <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink activeclassname='active' className="nav-link" to="/home" >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname='active' className="nav-link" to="/users" >Users</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname='active' className="nav-link" to="/about" >About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname='active' className="nav-link" to="/contactUs" >Contactus</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink activeclassname='active' className="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" to="/college" >College</NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item" activeclassname='active' to="/teacher" >Teacher</NavLink>
                  <NavLink className="dropdown-item" activeclassname='active' to="/student" >Student</NavLink>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink activeclassname='active' className="nav-link" to="/hookFormDemo" >React Hook Form</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname='active' className="nav-link" to="/useEffectDemo" >Use Effect Component</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname='active' className="nav-link" to="/useContextDemo" >Use Context Component</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname='active' className="nav-link" to="/lifeCycleDemo" >Life Cycle Component</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname='active' className="nav-link" to="/conditionalDemo" >Conditional Component</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname='active' className="nav-link" to="/unControlledComp" >Un Controlled Component</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname='active' className="nav-link" to="/useMemoDemo" >Use Memo Demo</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname='active' className="nav-link" to="/counter" >Counter</NavLink>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <NavLink className="btn btn-outline-success my-2 my-sm-0" to="/Login">Logout</NavLink>
            </form>
          </div>
        </div>
      </nav>}
      <div className='main'>
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<User />} />
          <Route path="user" element={<User />} />
          <Route path="about" element={<About />} />
          <Route path="contactUs" element={<Contact />} />
          <Route path="college" element={<College />}>
            <Route path="teacher" element={<Teacher />} />
            <Route path="student" element={<Student />} />
          </Route>
          <Route path="useEffectDemo" element={<UseEffectDemo />} />
          <Route path="useContextDemo" element={<useContextDemo />} />
          <Route path="lifeCycleDemo" element={<LifeCycleDemo />} />
          <Route path="conditionalDemo" element={<ConditionalDemo />} />
          <Route path="hookFormDemo" element={<ReactHookForm />} />
          <Route path="useMemoDemo" element={<UseMemoDemo />} />
          <Route path="unControlledComp" element={<UnControlledComp />} />
          <Route path="counter" element={<Counter />} />
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
