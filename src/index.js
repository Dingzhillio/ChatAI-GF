import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./style.css";
import "./font.css";
import "./main.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
// import { useProgress } from '@react-three/drei';


function Loading() {
  // const { progress } = useProgress();
  // return <h1>Loading... {progress.toFixed(2)}%</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<Loading/>}>
    <React.StrictMode>
      <App />
      <ToastContainer position="top-right" newestOnTop />
    </React.StrictMode>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
