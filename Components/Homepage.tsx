"use client";
import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
const Homepage = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};
const home = styled.div`
  width: 100%;
  height: 100vh;
`;
export default Homepage;
