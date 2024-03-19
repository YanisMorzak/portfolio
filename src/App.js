import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Services from "./components/Services";

export default function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Services />
    </div>
  );
}
