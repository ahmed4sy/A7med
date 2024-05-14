import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Projects from "./Componets/pages/projects";
import About from "./Componets/pages/about";
import Feedbacks from "./Componets/pages/feedbacks";
import FeedAPI from "./Componets/pages/apifeed";
import HeadContext, { Word } from "./HeadPage/HeadContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HeadContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TApp />} />
          <Route path="/*" element={<NOTfound />} />
          <Route path="/home" element={<App />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedbacks" element={<Feedbacks />} />
          <Route element={<Prodict />}>
            <Route path="/api/feedbacks" element={<FeedAPI />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HeadContext>
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
  return <Navigate to={"/home"} />;
}
function Prodict() {
  let { Prodict } = useContext(Word);
  return !Prodict ? <Outlet /> : <Navigate to={"/home"} />;
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
