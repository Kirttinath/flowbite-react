import styled from "styled-components";
import Image from "next/image";

export const Formdiv = styled.div`
  width: 100%;
  height: 70vh;
  padding: 0em 5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Formleft = styled.div`
  height: 100%;
  margin-top: 70px;
  padding: 4em 0em;
`;
export const Images = styled.div`
  display: flex;
  justify-content: enter;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
`;

export const Imagesrc = styled(Image)`
  width: 2em;
`;
export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.5em;
`;
export const TextArea = styled.div``;

export const TextSection = styled.div`
  width: auto;
  margin-top: 1em;
  @media screen and(min-width:280px) and (max-width: 1000px) {
    width: auto;
  }
`;

export const Heading = styled.h1`
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const Tickicon = styled.div`
  width: 1.5em;
`;

export const SubHeading = styled.h2`
  font-size: 1em;
  margin-left: 2em;
`;

export const Formright = styled.div`
  padding-top: 2em;
  height: 115%;
`;

export const Form = styled.form`
  border-radius: 8px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5em;
  box-sizing: border-box;
`;

export const FormHeading = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

export const SignUp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  margin-top: 1em;
  @media screen and(min-width:280px) and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Googlebutton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 8px;
  gap: 0.5em;
  font-weight: bold;
  padding: 5px 10px;
  font-size: 0.8em;
`;
export const Google = styled.div`
  width: 2em;
  height: 2em;
`;

export const Github_button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 8px;
  gap: 0.5em;
  font-weight: bold;
  padding: 5px 10px;
  font-size: 0.8em;
`;

export const Github = styled.div`
  width: 2em;
  height: 2em;
`;

export const Separator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5em;
`;

export const Blank1 = styled.div`
  border: 1px solid gray;
  width: 10em;
  margin-right: 5px;
`;

export const Blank2 = styled.div`
  border: 1px solid gray;
  width: 10em;
  margin-left: 5px;
`;
export const Inputs = styled.div``;

export const Label = styled.div`
  font-weight: bold;
  margin-top: 0.5em;
`;

export const Input = styled.input`
  border-radius: 8px;
  margin-top: 0.5em;
  height: 2.5em;
  width: 100%;
`;

export const Rememberdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2em;
`;
export const Input1 = styled.input`
  border-radius: 2px;
  margin-top: 0.1em;
`;
export const Remember = styled.p``;

export const Tag = styled.div`
  display: flex;
  margin-top: 1em;
  justify-content: space-between;
  align-items: center;
`;

export const Forgot_Button = styled.a`
  color: blue;
  &:hover {
    text-weight: bold;
  }
`;

export const Login_Button = styled.button`
  width: 100%;
  margin-top: 1em;
  height: 2.5em;
  font-size: 1em;
  color: white;
  background: #1a56db;
  border-radius: 8px;
  &:hover {
    background-color: #007bff;
    transform: 0.3s ease-in-out;
  }
`;

export const Account = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 1em;
  gap: 0.3em;
  font-weight: bold;
  align-items: center;
`;

export const Signup = styled.a`
  color: blue;
  margin-left: 5px;
`;

export const span = styled.span`
  color: red;
`;
