import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ChangeBackground from "./Animals/components/Background";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChangeBackground>
      <App />
    </ChangeBackground>
  </React.StrictMode>
);
