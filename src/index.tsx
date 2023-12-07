import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Modal from "./components/Modal/Modal";
import styled from "styled-components";
import { Colors } from "./utils/style/Colors";

export const StyledTitle = styled.h1`
  color: ${Colors.text};
  font-size: 2.4rem;
  padding: 10px 20px;
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StyledTitle>Movie guid App </StyledTitle>
    <Modal />
  </React.StrictMode>
);
