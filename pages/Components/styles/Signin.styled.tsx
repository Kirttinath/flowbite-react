import styled from "styled-components";

export const authenticatedStyle: React.CSSProperties = {
  background: "#e0ffe0",
  border: "1px solid #4caf50",
  borderRadius: "5px",
  padding: "20px",
  height: "100px",

  marginTop: "200px",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  fontSize: "28px",
  fontWeight: "600",
  color: "green",
};
export const unauthenticatedStyle: React.CSSProperties = styled.div`
  color: red;
`;
