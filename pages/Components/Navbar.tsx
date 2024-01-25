"use client";
import { Nav, Navleft, Logo, Imagecomponent, Title } from "./styles/Nav.styled";
import {
  Links,
  NavLink,
  NavRight,
  Button1,
  Button2,
  Button3,
} from "./styles/Nav.styled";
import logo from "../../public/f-logo.png";
import { signOut, signIn, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  function signoutpg() {
    signOut();
  }
  function signinpage() {
    signIn();
  }
  if (session?.data === null) {
    return (
      <Nav>
        <Navleft>
          <Logo>
            <Imagecomponent src={logo} alt="flowbite logo error" />
            <Title href="#">Flowbite</Title>
          </Logo>
          <Links>
            <NavLink href="#">Company</NavLink>
            <NavLink href="#">Marketplace</NavLink>
            <NavLink href="#">Features</NavLink>
            <NavLink href="#">Team</NavLink>
            <NavLink href="#">Contact</NavLink>
          </Links>
        </Navleft>
        <NavRight>
          <Button1 onClick={signinpage}>Log In</Button1>
          <Button2>Get Started</Button2>
        </NavRight>
      </Nav>
    );
  } else {
    return (
      <Nav>
        <Navleft>
          <Logo>
            <Imagecomponent src={logo} alt="flowbite logo error" />
            <Title href="#">Flowbite</Title>
          </Logo>
          <Links>
            <NavLink href="#">Company</NavLink>
            <NavLink href="#">Marketplace</NavLink>
            <NavLink href="#">Features</NavLink>
            <NavLink href="#">Team</NavLink>
            <NavLink href="#">Contact</NavLink>
          </Links>
        </Navleft>
        <NavRight>
          <Button3 onClick={signoutpg}>Sign Out</Button3>
          <Button2>Get Started</Button2>
        </NavRight>
      </Nav>
    );
  }
};
export default Navbar;
