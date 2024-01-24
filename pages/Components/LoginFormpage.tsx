"use client";

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
import { Formright } from "./styles/Formpage.styled";

import tickicon from "../../public/check.png";
import logo from "../../public/f-logo.png";

type Props = {};

const LoginFormpage = ({}: Props) => {
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
      <Formright></Formright>
    </Formdiv>
  );
};
export default LoginFormpage;
