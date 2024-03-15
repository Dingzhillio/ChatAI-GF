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

const Loading = () => <div>Loading...</div>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
      <ToastContainer position="top-right" newestOnTop />
    </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
