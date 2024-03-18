import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}
