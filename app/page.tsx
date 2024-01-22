"use client";
import styled from "styled-components";
import Homepage from "../Components/Homepage";

export default function Home() {
  return (
    <div>
      <Homepage />
    </div>
  );
}

const main = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
