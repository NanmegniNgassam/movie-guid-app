import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Modal from "./components/Modal/Modal";

import Credentials from "./components/Credentials";
import Title from "./components/Title";



const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Title title="Movie guid Soft"/>
    <Modal />
    <Credentials />
  </React.StrictMode>
);
