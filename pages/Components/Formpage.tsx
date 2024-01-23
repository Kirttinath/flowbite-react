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
import { Separator, Blank1, Blank2 } from "./styles/Formpage.styled";
import { Inputs, Label, Input } from "./styles/Formpage.styled";
import { Remember, Rememberdiv, Input1, Tag } from "./styles/Formpage.styled";
import { Forgot_Button, Login_Button } from "./styles/Formpage.styled";
import { Account, Signup, span } from "./styles/Formpage.styled";

import tickicon from "../../public/check.png";
import logo from "../../public/f-logo.png";
import google from "../../public/google.png";
import github from "../../public/github.png";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";

type Inputs = {
  email: string;
  password: string;
};
const schema: ZodType<Inputs> = z.object({
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters"),
});

const Formpage = () => {
  const SubmitData: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log("Its valid", data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

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
        <Form onSubmit={handleSubmit(SubmitData)}>
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
            <Blank1 />
            or
            <Blank2 />
          </Separator>
          <Inputs>
            <Label>Email</Label>
            <Input
              type="text"
              placeholder="name@example.com"
              {...register("email")}
            />
            {errors.email && <span>{errors.email.message}</span>}
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="*******"
              {...register("password")}
            />
            {errors.password && <span>{errors.password.message}</span>}
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
            Don't have an account, yet ? <Signup href="#">Sign up</Signup>{" "}
          </Account>
        </Form>
      </Formright>
    </Formdiv>
  );
};
export default Formpage;
