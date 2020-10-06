import React from "react";
import ReactDOM from "react-dom";
// Main Routing of project
import App from "./App";
// linking css with javascript
import "./assets/app.scss";

// Linking javascript with public.html
ReactDOM.render(
      <React.StrictMode>
            <App />
      </React.StrictMode>,
      document.getElementById("root")
);
