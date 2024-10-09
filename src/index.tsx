import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Modal from "./components/Modal/Modal";
import styled from "styled-components";
import { Colors } from "./utils/style/Colors";
import { FaExternalLinkAlt } from "react-icons/fa";

const Title = styled.h1`
  color: ${Colors.text};
  font-size: 2.4rem;
  padding: 10px 20px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
const Credentials = styled.p`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 100%;
  a {
    color: ${Colors.secondary};
    text-decoration: none;
    font-style: italic;
    display: flex;
    align-items: center;
    gap: 5px;
    display: inline-block;
    text-align: center;
    margin-inline-start: 3px;
  }
  @media screen and (max-width: 400px) {
    display: none;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Title>Movie guid App </Title>
    <Modal />
    <Credentials>
      @Copyright April 2023 | All rights reserved to
      <a
        href="https://gilles-ngassam.pisoftlite.com/"
        target="_blank"
        rel="noreferrer"
      >
        Gilles NGASSAM <FaExternalLinkAlt />
      </a>
    </Credentials>
  </React.StrictMode>
);
