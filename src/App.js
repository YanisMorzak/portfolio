import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}
