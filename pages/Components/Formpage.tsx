import Link from "next/link";
import Image from "next/image";
import {
  Formdiv,
  Formleft,
  Images,
  Logo,
  Imagesrc,
  Title,
} from "./styles/Formpage.styled";
import {
  TextArea,
  TextSection,
  Heading,
  Tickicon,
  SubHeading,
} from "./styles/Formpage.styled";
import { Formright, Form, FormHeading } from "./styles/Formpage.styled";
import { SignUp, Googlebutton, Google } from "./styles/Formpage.styled";
import { Github_button, Github } from "./styles/Formpage.styled";
import { Separator, Blank } from "./styles/Formpage.styled";
import { Inputs, Label, Input } from "./styles/Formpage.styled";
import { Remember, Rememberdiv, Input1, Tag } from "./styles/Formpage.styled";
import { Forgot_Button, Login_Button } from "./styles/Formpage.styled";
import { Account, Signup } from "./styles/Formpage.styled";

import tickicon from "../../public/check.png";
import logo from "../../public/f-logo.png";
import google from "../../public/google.png";
import github from "../../public/github.png";
const Formpage = () => {
  return (
    <Formdiv>
      <Formleft>
        <Images>
          <Logo>
            <Imagesrc src={logo} alt="Flowbite logo" />
            <Title>Flowbite</Title>
          </Logo>
        </Images>

        <TextArea>
          <TextSection>
            <Heading>
              {" "}
              <Tickicon>
                <Image src={tickicon} alt="Tickicon" />
              </Tickicon>
              Get started quickly{" "}
            </Heading>
            <SubHeading>
              Integrate with developer-friendly APIs or choose low-code or
              pre-built solutions.
            </SubHeading>
          </TextSection>
          <TextSection>
            <Heading>
              {" "}
              <Tickicon>
                <Image src={tickicon} alt="Tickicon" />
              </Tickicon>
              Support any buisness model
            </Heading>
            <SubHeading>
              Host code that you don't want to share with the world in private.
            </SubHeading>
          </TextSection>
          <TextSection>
            <Heading>
              {" "}
              <Tickicon>
                <Image src={tickicon} alt="Tickicon" />
              </Tickicon>
              Join millions of buisnesses
            </Heading>
            <SubHeading>
              Flowbite is trusted by ambitious startups and enterprises of every
              size.
            </SubHeading>
          </TextSection>
        </TextArea>
      </Formleft>
      <Formright>
        <Form>
          <FormHeading>Welcome Back</FormHeading>
          <SignUp>
            <Googlebutton>
              <Google>
                <Image src={google} alt="Google icon" />
              </Google>
              Sign up with Google
            </Googlebutton>
            <Github_button>
              <Github>
                <Image src={github} alt="Git icon" />
              </Github>
              Sign up with Github
            </Github_button>
          </SignUp>
          <Separator>
            <br />
            <p>or</p>
            <Blank></Blank>
          </Separator>
          <Inputs>
            <Label>Email</Label>
            <Input type="text" placeholder="name@example.com" />

            <Label>Password</Label>
            <Input type="password" placeholder="*******" />
          </Inputs>
          <Tag>
            <Rememberdiv>
              <Input1 type="checkbox" />
              <Remember> Remember Me</Remember>
            </Rememberdiv>
            <Forgot_Button href="#">Forgot Password?</Forgot_Button>
          </Tag>
          <Login_Button>Create account</Login_Button>

          <Account>
            Don't have an account, yet? <Signup href="#">Sign up</Signup>{" "}
          </Account>
        </Form>
      </Formright>
    </Formdiv>
  );
};
export default Formpage;
