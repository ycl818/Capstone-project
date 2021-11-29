import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Map from "./pages/Map";
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/style.css";
import Login from "./pages/Login";
import Singup from "./pages/Singup";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/Home";

function App() {
  const { authIsReady, user} = useAuthContext()

  return (
    <div className="App">
      <Nav />
      {authIsReady && (
        <Routes>
          <Route
            path="/pictures"
            element={!user ? <Navigate replace to="/login" /> : <Homepage />}
          />

          <Route
            path="/"
            element={!user ? <Navigate replace to="/login" /> : <Home />}
          />

          <Route
            path="/about"
            element={!user ? <Navigate replace to="/login" /> : <About />}
          />
          <Route
            path="/map"
            element={!user ? <Navigate replace to="/login" /> : <Map />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate replace to="/" />}
          />
          <Route
            path="/signup"
            element={!user ? <Singup /> : <Navigate replace to="/" />}
          />
        </Routes>
      )}
      <Footer />
    </div>
  );
}

export default App;
