import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Projects from "./Componets/pages/projects";
import About from "./Componets/pages/about";
import Feedbacks from "./Componets/pages/feedbacks";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TApp />} />
        <Route path="/*" element={<NOTfound />} />
        <Route path="/home" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedbacks" element={<Feedbacks />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
function NOTfound(params) {
  return (
    <>
      <h1
        style={{
          marginTop: "500px",
          textAlign: "center",
        }}
      >
        NOT FOUND 404
      </h1>
      <hr />
    </>
  );
}
function TApp() {
  let nav = useNavigate();
  useEffect(() => {
    nav("/home");
  }, [nav]);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
