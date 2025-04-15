import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Modal from "./components/Modal/Modal";
import styled from "styled-components";
import { Colors } from "./utils/style/Colors";
import Credentials from "./components/Credentials";

const Title = styled.h1`
  color: ${Colors.text};
  font-size: 2.4rem;
  padding: 10px 20px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Title>Movie guid Soft</Title>
    <Modal />
    <Credentials />
  </React.StrictMode>
);
