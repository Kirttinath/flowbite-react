import styled from "styled-components";

export const Footerdiv = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: gray;
  position: absolute;
  width: fit-content;
  @media screen {
    .container {
      padding: 0 3.2rem;
    }
  }
`;

export const Footleft = styled.div`
  display: flex;
  margin-left: 40px;
`;
export const Footright = styled.div`
  margin-left: 970px;
  display: flex;
  gap: 20px;
  width: 20px;
  height: 20px;
  &:hover {
    cursor: pointer;
  }
`;
