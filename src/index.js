import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./index.css";


// New React Documentation (We have some console errors, I think it's for this :( ) 
// website -> https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);


ReactDOM.render(<App />, document.getElementById("root"));

