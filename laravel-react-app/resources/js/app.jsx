import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter basename="/react">
    <App />
  </BrowserRouter>
);
