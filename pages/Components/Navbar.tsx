"use client";
import { Nav, Navleft, Logo, Imagecomponent, Title } from "./styles/Nav.styled";
import {
  Links,
  NavLink,
  NavRight,
  Button1,
  Button2,
} from "./styles/Nav.styled";
import logo from "../../public/f-logo.png";

const Navbar = () => {
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
        <Button1>Log In</Button1>
        <Button2>Get Started</Button2>
      </NavRight>
    </Nav>
  );
};
export default Navbar;
