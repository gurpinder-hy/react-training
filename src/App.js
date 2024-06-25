// import logo from './logo.svg';
import './App.css';
// import UseMemoDemo from './UseMemoDemo';
// import { LifeCycleHook } from './LifeCycle';
import { BrowserRouter, Routes, Route, Link, Navigate, NavLink, useLocation } from "react-router-dom";
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
import UseContextSol from './pages/useContextSol';
import UseContextDemo from './pages/useContextDemo';
import LifeCycleDemo from './pages/lifeCycleDemo';
import ConditionalDemo from './pages/conditionalDemo';
import NestedMap from './pages/nestedMap';
import SPA from './pages/SPA';
import TodoRedux from './pages/todo-redux';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <BrowserRouter basename='/react-training'>
      {isLoggedIn && <nav style={{
        position: 'fixed',
        zIndex: '999',
        width: '100%',
        top: 0
      }} className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                <NavLink activeclassname='active' className="nav-link" to="/nestedmap" >Nested MAP</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname='active' className="nav-link" to="/hookFormDemo" >React Hook Form</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" to="/hooks" >Hooks</NavLink>
                <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <NavLink activeclassname='active' className="nav-link" to="/hooks/useEffectDemo" >Use Effect</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeclassname='active' className="nav-link" to="/hooks/useContextDemo" >Use Context</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeclassname='active' className="nav-link" to="/hooks/useMemoDemo" >Use Memo Demo</NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" to="/components" >Components</NavLink>
                <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <NavLink activeclassname='active' className="nav-link" to="/components/conditionalDemo" >Conditional</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeclassname='active' className="nav-link" to="/components/unControlledComp" >Un Controlled</NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink activeclassname='active' className="nav-link" to="/lifeCycleDemo" >Life Cycle</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname='active' className="nav-link" to="/counter" >Counter</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname='active' className="nav-link" to="/spa" >SPA</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname='active' className="nav-link" to="/todo" >TODO Redux</NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <NavLink className="btn btn-outline-success my-2 my-sm-0" to="/Login">Logout</NavLink>
            </form>
          </div>
        </div>
      </nav>}
      <div className='main' style={{paddingTop: 10}}>
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<User />} />
          <Route path="/user" element={<User />} />
          <Route path="/about" element={<About />} />
          <Route path="/nestedmap" element={<NestedMap />} />
          <Route path="/hooks/useEffectDemo" element={<UseEffectDemo />} />
          <Route path="/hooks/useContextDemo" element={<UseContextSol />} />
          <Route path="/lifeCycleDemo" element={<LifeCycleDemo />} />
          <Route path="/components/conditionalDemo" element={<ConditionalDemo />} />
          <Route path="/hookFormDemo" element={<ReactHookForm />} />
          <Route path="/hooks/useMemoDemo" element={<UseMemoDemo />} />
          <Route path="/components/unControlledComp" element={<UnControlledComp />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/spa" element={<SPA />} />
          <Route path="/todo" element={<TodoRedux />} />
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
